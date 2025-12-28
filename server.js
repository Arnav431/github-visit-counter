export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const user = url.searchParams.get("Arnav431");

    if (!user) {
      return new Response("Missing user", { status: 400 });
    }

    let count = await env.VIEWS.get(user);
    count = count ? Number(count) + 1 : 1;

    await env.VIEWS.put(user, count.toString());

    return new Response(JSON.stringify(count), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
