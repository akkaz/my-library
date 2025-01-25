import React, { useState } from 'react';
import { TextInput, Textarea, Button, Paper, Stack, Group, LoadingOverlay, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { lookupISBN } from '../services/isbnService';

export function BookForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm({
    initialValues: {
      title: '',
      author: '',
      publishDate: '',
      isbn: '',
      coverImage: '',
      location: '',
      details: ''
    },
    validate: {
      title: (value) => !value ? 'Title is required' : null,
      author: (value) => !value ? 'Author is required' : null,
      isbn: (value) => !value ? 'ISBN is required' : null,
      location: (value) => !value ? 'Location is required' : null,
    }
  });

  const handleIsbnLookup = async () => {
    const isbn = form.values.isbn;
    if (!isbn) {
      setError('Please enter an ISBN');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const bookData = await lookupISBN(isbn);
      form.setValues(bookData);
    } catch (error) {
      console.error('Lookup failed:', error);
      setError('Failed to fetch book details. Please check the ISBN or enter details manually.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper p="md" withBorder pos="relative">
      <LoadingOverlay visible={isLoading} overlayProps={{ blur: 2 }} />
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <Group grow>
            <TextInput
              label="ISBN"
              placeholder="Enter ISBN (e.g., 9780134093413)"
              required
              {...form.getInputProps('isbn')}
            />
            <Button 
              onClick={handleIsbnLookup} 
              variant="light" 
              style={{ marginTop: 25 }}
            >
              Lookup ISBN
            </Button>
          </Group>
          
          {error && (
            <Text color="red" size="sm">
              {error}
            </Text>
          )}

          <TextInput
            label="Title"
            placeholder="Book title"
            required
            {...form.getInputProps('title')}
          />
          <TextInput
            label="Author"
            placeholder="Author name"
            required
            {...form.getInputProps('author')}
          />
          <TextInput
            label="Publish Date"
            placeholder="YYYY-MM-DD"
            {...form.getInputProps('publishDate')}
          />
          <TextInput
            label="Cover Image URL"
            placeholder="http://..."
            {...form.getInputProps('coverImage')}
          />
          <TextInput
            label="Location"
            placeholder="Shelf number or location"
            required
            {...form.getInputProps('location')}
          />
          <Textarea
            label="Additional Details"
            placeholder="Any additional information"
            minRows={3}
            {...form.getInputProps('details')}
          />
          <Button type="submit">Add Book</Button>
        </Stack>
      </form>
    </Paper>
  );
}
