import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const connectionString = "postgresql://postgres:ELXjJFXiZewVVAQS@db.umnfxfyhunexfjjfukgq.supabase.co:5432/postgres"
const client = postgres(connectionString)
const db = drizzle(client, { schema })

export default db
