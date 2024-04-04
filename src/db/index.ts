import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DB_CONNECTION!);
export const db = drizzle(sql);
