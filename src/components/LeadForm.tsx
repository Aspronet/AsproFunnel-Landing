"use client";

import { useActionState } from "react";
import { submitLead, type FormState } from "@/app/actions";

const initial: FormState = { ok: false, error: "" };

export default function LeadForm() {
  const [state, action, pending] = useActionState(submitLead, initial);

  if (state.ok) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--accent-green-border)] bg-[var(--accent-green-bg)] p-8">
        <span className="text-2xl">&#10003;</span>
        <p className="text-base font-semibold text-[var(--accent-green)]">
          Recibimos tu info. Te contactamos pronto.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex w-full max-w-[480px] flex-col gap-3 sm:gap-4">
      <input
        name="name"
        type="text"
        placeholder="Tu nombre completo"
        required
        className="w-full rounded-[10px] border border-[var(--card-dark-border)] bg-[#1A1A1A] px-4 py-3.5 text-sm text-white placeholder:text-[var(--text-muted)] focus:border-[#4F46E5] focus:outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Tu email"
        required
        className="w-full rounded-[10px] border border-[var(--card-dark-border)] bg-[#1A1A1A] px-4 py-3.5 text-sm text-white placeholder:text-[var(--text-muted)] focus:border-[#4F46E5] focus:outline-none"
      />
      <input
        name="phone"
        type="tel"
        placeholder="WhatsApp (opcional)"
        className="w-full rounded-[10px] border border-[var(--card-dark-border)] bg-[#1A1A1A] px-4 py-3.5 text-sm text-white placeholder:text-[var(--text-muted)] focus:border-[#4F46E5] focus:outline-none"
      />
      {state.error && (
        <p className="text-sm text-[var(--error-red)]">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[10px] bg-[var(--bg-white)] px-8 py-3.5 text-base font-medium text-[var(--text-primary)] disabled:opacity-50"
      >
        {pending ? "Enviando..." : "Quiero que me contacten"}
      </button>
    </form>
  );
}
