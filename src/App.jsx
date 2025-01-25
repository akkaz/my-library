import React, { useState } from 'react';
import { MantineProvider, Container, Title, Stack } from '@mantine/core';
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';
import { db } from './db';

export default function App() {
  const [bookList, setBookList] = useState([]);

  const handleAddBook = async (values) => {
    const newBook = await db.addBook(values);
    setBookList([...bookList, newBook]);
  };

  return (
    <MantineProvider>
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Title>Library Management System</Title>
          <BookForm onSubmit={handleAddBook} />
          <BookList books={bookList} />
        </Stack>
      </Container>
    </MantineProvider>
  );
}
