import { pgTable, text, timestamp, doublePrecision } from 'drizzle-orm/pg-core'

export const productsTable = pgTable('products', {
    id: text('id').primaryKey().default('uuid_generate_v4()'),
    name: text('name').notNull(),
    imageId: text('imageId').notNull(),
    description: text('description'),
    price: doublePrecision('price').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
})

export type Product = typeof productsTable.$inferSelect