"use server";

import { createAsproFunnel } from "@asprofunnel/sdk";

const af = createAsproFunnel({
  apiKey: process.env.AF_API_KEY!,
});

export type FormState = {
  ok: boolean;
  error: string;
};

export async function submitLead(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  if (!name || !email) {
    return { ok: false, error: "Nombre y email son requeridos" };
  }

  try {
    await af.createLead({
      name,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" ") || undefined,
      email,
      phone: phone || undefined,
      campaignId: process.env.AF_CAMPAIGN_ID!,
      source: "landing",
    });

    return { ok: true, error: "" };
  } catch (e) {
    console.error("Lead submission error:", e);
    return { ok: false, error: "Error al enviar. Intenta de nuevo." };
  }
}
