#!/usr/bin/env node
let book = {
    title: "JavaScript for Beginners",
    author: "John Doe",
    pages: 250
}
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}
let bookEntries = Object.entries(book);
bookEntries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
console.log(bookEntries);