"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import type { Project } from "@/lib/data";

type ShowProjectsOutput = {
  projects: Project[];
  filter: string | null;
};

const SUGGESTED_PROMPTS = [
  "Show me your AI projects",
  "What have you built with TypeScript?",
  "Tell me about Ireland Pulse",
];

export function ChatPanel() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const isStreaming = status === "streaming" || status === "submitted";

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent)] text-[#0a0a0a] shadow-lg transition-all hover:scale-105 hover:bg-[var(--accent-hover)] focus-visible:outline-none"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>

      {/* Panel */}
      <div
        className={`fixed inset-0 z-40 flex justify-end sm:inset-auto sm:bottom-20 sm:right-5 sm:h-[640px] sm:max-h-[calc(100vh-6rem)] sm:w-[380px] ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Mobile backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity sm:hidden ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <section
          className={`relative flex h-full w-full max-w-full flex-col overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-2xl transition-all duration-200 sm:rounded-xl ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0 sm:translate-y-2"
          }`}
          role="dialog"
          aria-label="Chat with portfolio assistant"
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <h2 className="text-sm font-semibold tracking-tight">
                Ask about my work
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text)]"
            >
              <CloseIcon />
            </button>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
          >
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-[var(--text-muted)]">
                  I&apos;m Donal&apos;s portfolio assistant. Ask me about any of
                  his projects.
                </p>
                <div className="flex flex-col gap-2">
                  {SUGGESTED_PROMPTS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => submit(p)}
                      className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-3 py-2 text-left text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)]"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => (
              <MessageBubble key={m.id} message={m} />
            ))}

            {isStreaming &&
              messages.at(-1)?.role !== "assistant" && <ThinkingIndicator />}

            {error && (
              <p className="rounded-md border border-red-900/40 bg-red-950/30 px-3 py-2 text-xs text-red-300">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2 border-t border-[var(--border)] bg-[var(--bg)] px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project…"
              disabled={isStreaming}
              className="flex-1 rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent)] focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              className="rounded-md bg-[var(--accent)] px-3 py-2 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

function MessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] space-y-2 ${
          isUser
            ? "rounded-lg rounded-br-sm bg-[var(--accent)] px-3 py-2 text-sm text-[#0a0a0a]"
            : "text-sm text-[var(--text)]"
        }`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "text") {
            return (
              <p
                key={i}
                className="whitespace-pre-wrap leading-relaxed"
              >
                {part.text}
              </p>
            );
          }
          if (part.type === "tool-show_projects") {
            return <ShowProjectsPart key={i} part={part} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

type ToolPart = {
  type: string;
  state: string;
  output?: unknown;
  errorText?: string;
};

function ShowProjectsPart({ part }: { part: ToolPart }) {
  if (part.state === "output-error") {
    return (
      <p className="text-xs text-red-400">
        Couldn&apos;t load projects: {part.errorText}
      </p>
    );
  }
  if (part.state !== "output-available" || !part.output) {
    return (
      <p className="text-xs text-[var(--text-dim)]">Loading projects…</p>
    );
  }
  const { projects: matched, filter } = part.output as ShowProjectsOutput;
  if (matched.length === 0) {
    return (
      <p className="text-xs text-[var(--text-muted)]">
        No projects match{filter ? ` "${filter}"` : ""}.
      </p>
    );
  }
  return (
    <div className="space-y-2">
      {matched.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
      <div
        className="relative flex h-16 items-end px-3 pb-2"
        style={{ background: project.gradient }}
      >
        {project.icon && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-4xl opacity-40 select-none">
            {project.icon}
          </div>
        )}
        <div className="relative">
          {project.accent && (
            <span className="block font-mono text-[9px] uppercase tracking-wider text-white/60">
              {project.accent}
            </span>
          )}
          <h3 className="text-sm font-semibold leading-tight tracking-tight text-white drop-shadow">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="space-y-2 p-3">
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded border border-[var(--border)] bg-[var(--bg-elevated)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        {(project.link || project.github) && (
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:opacity-80"
              >
                Visit <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[var(--text-muted)] hover:text-[var(--text)]"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]"
        style={{ animationDelay: "300ms" }}
      />
      <span className="ml-1">thinking</span>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
