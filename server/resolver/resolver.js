const { books, authors } = require("../data/static");
const resolvers = {
//Query
  Query: {
    books: () => books,
    book: (parent, agrs) => books.find((book) => book.id == agrs.id),
    authors: () => authors,
    author: (parent, agrs) => authors.find((author) => author.id == agrs.id),
  },
  Book:{
    author: (parent,agrs)=>{
        return authors.find((author) => author.id == parent.authorsId)
    }
  },
  Author:{
    books:(parent,agrs) =>{
       return books.filter((book)=> book.authorsId == parent.id)
    }
  },

//Mutation
  Mutation: {
    createAuthor:(parent,agrs) => agrs,
    createBook:(parent,agrs) => agrs
  }
};
module.exports = resolvers;
