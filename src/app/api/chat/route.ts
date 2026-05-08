import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { projects, type Project } from "@/lib/data";

export const runtime = "nodejs";
export const maxDuration = 30;

const bedrock = createAmazonBedrock({
  region: process.env.AWS_REGION ?? "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const SYSTEM_PROMPT = `You are a helpful assistant for Donal O'Callaghan's portfolio. You know all his projects. When asked about projects, use the show_projects tool to display them visually. Be concise and direct.`;

function filterProjects(filter?: string): Project[] {
  if (!filter) return projects;
  const q = filter.toLowerCase();
  return projects.filter((p) => {
    const haystack = [
      p.title,
      p.description,
      p.accent ?? "",
      ...p.tech,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: bedrock("us.anthropic.claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages: modelMessages,
    tools: {
      show_projects: tool({
        description:
          "Display a list of Donal's projects matching an optional keyword filter. Use this whenever the user asks about his work, projects, or things he has built.",
        inputSchema: z.object({
          filter: z
            .string()
            .optional()
            .describe(
              "Optional keyword to filter projects by (matches title, description, accent, or tech stack). Omit to return all projects.",
            ),
        }),
        execute: async ({ filter }) => {
          const matched = filterProjects(filter);
          return { projects: matched, filter: filter ?? null };
        },
      }),
    },
    stopWhen: stepCountIs(3),
  });

  return result.toUIMessageStreamResponse();
}
