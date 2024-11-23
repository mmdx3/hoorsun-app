import { createClient, RedisClientType } from "redis";

class RedisService {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      password: process.env.REDIS_PASSWORD,
      socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT!),
      },
    });
  }

  async connect() {
    await this.client.connect();
  }

  async set(key: string, value: string, expirySeconds?: number) {
    await this.client.set(key, value, {
      EX: expirySeconds,
    });
  }

  async get(key: string) {
    return await this.client.get(key);
  }

  async del(key: string) {
    await this.client.del(key);
  }
  async disconnect() {
    await this.client.disconnect();
  }
}
export default new RedisService();