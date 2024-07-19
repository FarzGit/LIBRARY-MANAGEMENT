# Library Management System

The Library Management System (LMS) is a web application designed to help manage library operations efficiently. This project allows users to borrow books from the library and enables administrators to manage book inventory.


## Technologies Used

- **MongoDB**: NoSQL database for storing user and book data
- **Express.js**: Backend framework for building the API
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for running the backend
- **Material UI**: UI component library for React
- **Tailwind CSS**: Utility-first CSS framework for styling

## Features

### User Features
- **Borrow Books**: Users can request to borrow books from the library.
- **Return Books**: Users can return borrowed books.
- **View Available Books**: Users can browse and search for books available in the library.

### Admin Features
- **Add Book**: Admins can add new books to the library inventory.
- **Edit Book**: Admins can edit the details of existing books.
- **Delete Book**: Admins can remove books from the library inventory.
- **Manage Borrow Requests**: Admins can accept or reject user requests to borrow books.

## Screenshots

![Screenshot1](/Client/public/readme/registration.png)
![Screenshot1](/Client/public/readme/Books1.png)
![Screenshot2](/Client/public/readme/issuedBooks.png)
![Screenshot2](/Client/public/readme/books2.png)
![Screenshot2](/Client/public/readme/request.png)


## Installation and Setup Instructions

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js and npm installed on your machine.
- mongoDB database.

### Installation

1. Clone the repository

   ```bash
   https://github.com/FarzGit/LIBRARY-MANAGEMENT.git


2. Move to Frontend directory

   ```bash
   cd Client
   
3. Install dependency
    
   ```bash
   npm install
   
4. Run the app
    
   ```bash
   npm run dev

5. Take a another terminal tab and move on backend directory
    
   ```bash
   cd Server

6. Install the dependency
    
   ```bash
   npm install

7. Run the server
    
   ```bash
   npm start

  ### Note

  When you clone and run the server it will not not work , on the backend root directory you need to create a .env file, In that file you give your , Mongo URL , JWT secret code , and port number

  ### Dot env

  - MONGO_URI="Enter you url path here"
  - JWT_SECRET = enter a scret key here
  - PORT=5000