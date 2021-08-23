//
// Object destructuring
//

// const book = {
//   title: 'Ego is your enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// const { author, title: bookTitle } = book;
// console.log(`This book is written by ${author} and the book's title is ${bookTitle}`);

//
//Array Deconstructuring
//
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
