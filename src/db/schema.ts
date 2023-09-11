import { pgTable, serial, text, uuid, timestamp, pgEnum, integer, boolean, json, primaryKey } from "drizzle-orm/pg-core"
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm"

/**
 * テーブル名: todos
 * テーブル説明: TODOリスト
 */
export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),

  author: text("author").notNull(), // 作成者
  title: text("title").notNull(), // タイトル
  description: text("description").notNull(), // 説明

  updated_at: timestamp("updated_at").notNull().defaultNow(), // 更新日時
  created_at: timestamp("created_at").notNull().defaultNow(), // 作成日時
})

export type SelectTodo = InferSelectModel<typeof todos>
export type InsertTodo = InferInsertModel<typeof todos>
