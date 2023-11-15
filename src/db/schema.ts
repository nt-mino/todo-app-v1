import { type InferInsertModel, type InferSelectModel } from "drizzle-orm"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

/**
 * テーブル名: todos
 * テーブル説明: TODOリスト
 */
export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),

  author: text("author").notNull(), // 作成者
  title: text("title").notNull(), // タイトル
  description: text("description").notNull(), // 説明
  category: text("category").notNull(), // カテゴリ

  updated_at: timestamp("updated_at").notNull().defaultNow(), // 更新日時
  created_at: timestamp("created_at").notNull().defaultNow(), // 作成日時
})

export type SelectTodo = InferSelectModel<typeof todos>
export type InsertTodo = InferInsertModel<typeof todos>
