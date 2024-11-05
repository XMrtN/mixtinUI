import type { APIRoute } from "astro";
import { db } from "astro:db";
import { getSession } from "auth-astro/server";
import { Schemas } from "db/schemas";

export const POST: APIRoute = async ({ params, request }) => {
  const session = await getSession(request);
  if (!session || session.user == null) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { slug } = params;
  if (!slug) new Response("Slug is required", { status: 400 });

  const body = await request.json();

  try {
    await db.insert(Schemas[slug as keyof typeof Schemas].schema).values(body);
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
};
