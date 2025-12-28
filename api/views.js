import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const user = req.query.user;
  if (!user) return res.status(400).json("Missing user");

  const count = await redis.incr(`views:${user}`);
  res.status(200).json(count);
}