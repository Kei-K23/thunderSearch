import type { Config } from 'drizzle-kit'

export default {
    driver: "pg",
    schema: "./src/db/schema.ts",
    dbCredentials: {
        connectionString: process.env.DB_CONNECTION!
    },
    out: "./drizzle"
} satisfies Config