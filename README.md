# Library Management System

A modern web application for managing library books with ISBN lookup capabilities.

## Features

- 📚 Add and manage books with detailed information
- 🔍 Auto-fill book details using ISBN lookup
- 📱 Responsive design using Mantine UI
- 💾 In-memory data storage (expandable to persistent storage)
- 📖 Book information includes:
  - Title
  - Author
  - Publication Date
  - ISBN
  - Cover Image
  - Location (shelf/section)
  - Additional Details

## Tech Stack

- React 18
- Vite
- Mantine UI Components
- Open Library API for ISBN lookup

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/library-management.git
    cd library-management
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

The application will be available at http://localhost:5173

### Usage

#### Adding a Book
1. Enter the ISBN in the ISBN field
2. Click "Lookup ISBN" to auto-fill book details
3. Add any missing information (like location)
4. Click "Add Book" to save

#### Managing Books
- View all books in the table format
- Books are displayed with cover thumbnails when available
- Each entry shows key information including title, author, and location

### API Integration
The system uses the Open Library API for book lookups:

- Base URL: https://openlibrary.org
- No authentication required
- Provides book details including:
  - Title
  - Author
  - Publication Date
  - Cover Images
  - Publisher Information

### Future Enhancements
- Persistent data storage
- Book editing and deletion
- Advanced search and filtering
- Barcode scanner integration
- User authentication
- Book checkout system
- Multiple library locations support
- Export/Import functionality

## Contributing

1. Fork the repository
2. Create your feature branch (e.g., `git checkout -b feature/AmazingFeature`)
3. Commit your changes (e.g., `git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (e.g., `git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments
- Open Library for their free book API
- Mantine for the UI components
- Vite for the build tooling
