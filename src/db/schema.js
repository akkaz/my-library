import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const books = sqliteTable('books', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  publishDate: text('publish_date').notNull(),
  isbn: text('isbn').notNull(),
  coverImage: text('cover_image'),
  location: text('location').notNull(),
  details: text('details')
});
