import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    provider: text('provider', { enum: ['github'] }),
    provider_id: text('provider_id').notNull().unique(),
    role: text('role', { enum: ['user', 'admin'] })
})

export const links = sqliteTable('links', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    uid: text('uid').notNull().unique(), // code link (splrge.link/[uid])
    url: text('url').notNull(),
    user_id: integer('user_id').references(() => users.id),
})