import React from 'react';
import { Table, Image, Text } from '@mantine/core';

export function BookList({ books }) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Cover</Table.Th>
          <Table.Th>Title</Table.Th>
          <Table.Th>Author</Table.Th>
          <Table.Th>ISBN</Table.Th>
          <Table.Th>Location</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {books.map((book) => (
          <Table.Tr key={book.id}>
            <Table.Td>
              {book.coverImage ? (
                <Image src={book.coverImage} width={50} height={75} fit="contain" />
              ) : (
                <Text size="sm">No cover</Text>
              )}
            </Table.Td>
            <Table.Td>{book.title}</Table.Td>
            <Table.Td>{book.author}</Table.Td>
            <Table.Td>{book.isbn}</Table.Td>
            <Table.Td>{book.location}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
