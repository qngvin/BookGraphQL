const books = [
  {
    id: 1,
    name: "De Men Phieu Luu Ky",
    genre: "Adventure",
    authorsId:1
  },
  {
    id: 2,
    name: "Lam Giàu không khó",
    genre: "Education",
    authorsId:2
  },
  {
    id: 3,
    name: "Harry Potter và Hòn Đá Phù Thủy",
    genre: "Fantasy",
    authorsId:1
  },
  {
    id: 4,
    name: "Người giàu cũng khóc",
    genre: "Drama",
    authorsId:3
  },
  {
    id: 5,
    name: "Sherlock Holmes",
    genre: "Mystery",
    authorsId:5
  },
  {
    id: 6,
    name: "Nghìn Lẻ Một Đêm",
    genre: "Fiction",
    authorsId:5
  },
  {
    id: 7,
    name: "Đắc Nhân Tâm",
    genre: "Self-help",
    authorsId:2
  },
  {
    id: 8,
    name: "Tiếng Chim Hót Trong Bụi Mận Gai",
    genre: "Literature",
    authorsId:4
  },
];

const authors = [
  { id: 1, name: "Tô Hoài", age: 125 },
  { id: 2, name: "Robert Kiyosaki", age: 125 },
  { id: 3, name: "J.K. Rowling", age: 125 },
  { id: 4, name: "Dale Carnegie", age: 125 },
  { id: 5, name: "Harper Lee", age: 125 },
];
module.exports = {
  books,
  authors,
};
