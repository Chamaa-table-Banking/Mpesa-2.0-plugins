import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

const newRedisClient = await client.connect(
    {
        url: process.env.REDIS_URL
    }
);

export default newRedisClient;