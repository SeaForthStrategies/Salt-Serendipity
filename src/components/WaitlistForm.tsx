"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm({ light = false }: { light?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const form = new FormData(event.currentTarget);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email") }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  }

  if (status === "sent") {
    return <p className={`text-xl font-medium tracking-[-.03em] ${light ? "text-soft-white" : "text-navy"}`}>You&apos;re on the list. See you out there.</p>;
  }

  return (
    <div className="max-w-xl">
      <form onSubmit={submit} className={`flex flex-col border sm:flex-row ${light ? "border-soft-white/35" : "border-navy/30"}`}>
        <input required name="email" type="email" placeholder="Your email address" className={`min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:opacity-60 ${light ? "text-white placeholder:text-white" : "text-navy placeholder:text-navy"}`} />
        <button disabled={status === "loading"} type="submit" className={`nav-link border-t px-4 py-4 text-left disabled:opacity-50 sm:border-l sm:border-t-0 ${light ? "border-white/25 text-white hover:bg-white hover:text-navy" : "border-navy/25 text-navy hover:bg-navy hover:text-white"}`}>
          {status === "loading" ? "Joining..." : "Join list ↗"}
        </button>
      </form>
      {status === "error" && <p className={`mt-3 text-xs ${light ? "text-white/65" : "text-navy/65"}`}>{message}</p>}
    </div>
  );
}
