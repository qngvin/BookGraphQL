const { books, authors } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");
const resolvers = {
  //Query
  Query: {
    books: () => books,
    book: (parent, agrs) => books.find((book) => book.id == agrs.id),
    authors: () => authors,
    author: (parent, agrs) => authors.find((author) => author.id == agrs.id),
  },
  Book: {
    author: (parent, agrs) => {
      return authors.find((author) => author.id == parent.authorsId);
    },
  },
  Author: {
    books: (parent, agrs) => {
      return books.filter((book) => book.authorsId == parent.id);
    },
  },

  //Mutation
  Mutation: {
    createAuthor: async (parent, agrs) => {
      const newAuthor = new Author(agrs);
      return await newAuthor.save();
    },
    createBook: async (parent, agrs) => {
      const newBook = new Book(agrs);
      return await newBook.save();
    },
  },
};
module.exports = resolvers;
