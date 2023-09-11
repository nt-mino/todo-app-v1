import type { Config } from "drizzle-kit"

const drizzleConfig = {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  breakpoints: true,
  driver: "pg",
  dbCredentials: {
    connectionString: "postgresql://postgres:ELXjJFXiZewVVAQS@db.umnfxfyhunexfjjfukgq.supabase.co:5432/postgres",
  },
} satisfies Config

export default drizzleConfig
