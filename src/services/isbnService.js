const API_BASE = 'https://openlibrary.org';

export async function lookupISBN(isbn) {
  // Remove any hyphens or spaces from ISBN
  const cleanIsbn = isbn.replace(/[-\s]/g, '');
  
  try {
    console.log(`Fetching ISBN: ${cleanIsbn}`);
    const response = await fetch(`${API_BASE}/api/books?bibkeys=ISBN:${cleanIsbn}&format=json&jscmd=data`);
    
    console.log('API Response status:', response.status);
    const data = await response.json();
    console.log('API Response data:', data);

    const bookData = data[`ISBN:${cleanIsbn}`];
    if (!bookData) {
      throw new Error('Book not found');
    }

    return {
      title: bookData.title || '',
      author: bookData.authors?.[0]?.name || '',
      publishDate: bookData.publish_date || '',
      isbn: cleanIsbn,
      coverImage: bookData.cover?.large || bookData.cover?.medium || bookData.cover?.small || '',
      location: '', // This needs to be filled by user
      details: `Publisher: ${bookData.publishers?.[0] || ''}\nPages: ${bookData.number_of_pages || ''}\nPublish Date: ${bookData.publish_date || ''}`
    };
  } catch (error) {
    console.error('ISBN lookup error:', error);
    // Try alternative Open Library endpoint
    try {
      console.log('Trying alternative endpoint...');
      const altResponse = await fetch(`${API_BASE}/isbn/${cleanIsbn}.json`);
      console.log('Alternative API Response status:', altResponse.status);
      const altData = await altResponse.json();
      console.log('Alternative API Response data:', altData);

      return {
        title: altData.title || '',
        author: altData.authors?.[0]?.name || '',
        publishDate: altData.publish_date || '',
        isbn: cleanIsbn,
        coverImage: altData.cover?.large || altData.cover?.medium || altData.cover?.small || '',
        location: '',
        details: `Publisher: ${altData.publishers?.[0] || ''}\nPages: ${altData.number_of_pages || ''}\nPublish Date: ${altData.publish_date || ''}`
      };
    } catch (altError) {
      console.error('Alternative lookup error:', altError);
      throw new Error('Failed to fetch book details from all sources');
    }
  }
}
