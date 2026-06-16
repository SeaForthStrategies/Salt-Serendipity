"use client";

import { FormEvent, useState } from "react";

export function CommunityForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("name"), email: form.get("email") }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error ?? "Could not join right now.");
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not join right now.");
    }
  }

  if (status === "sent") return <p className="serif text-2xl">You&apos;re in. See you out there.</p>;

  return <form className="community-form" onSubmit={submit}>
    <input required name="name" placeholder="First name" />
    <input required name="email" type="email" placeholder="Email address" />
    <button className="button" disabled={status === "loading"}>{status === "loading" ? "Joining..." : "Join the club"}</button>
    {status === "error" && <p className="text-xs">{message}</p>}
  </form>;
}
