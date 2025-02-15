/*
It is done when I define a new schema named bookSchema for the subdocument.

It is done when the bookSchema has two properties: title and price.

It is done when the books subdocument is nested in the parent document.

It is done when I have created a model named Library.

It is done when I have created an array of three books using the bookSchema.

It is done when I have created a new instance of the Library model which includes the books subdocument.

It is done when I test the GET route in Insomnia and the subdocuments are nested in the parent document.
*/

import { Schema, model, Document } from 'mongoose';

// TODO: Define an interface for the `bookSchema` subdocument 
interface IBook extends Document {
  title: string;
  price: number;
}
interface ILibrary extends Document {
  name: string;
  books: IBook[];
  lastAccessed?: Date;
}

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    price: Number,
  }
);

const librarySchema = new Schema<ILibrary>({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { title: 'Slaughterhouse 5', price: 16.95 },
  { title: 'Viriconium', price: 25.00 },
];

Library
  .create({ name: 'Tigard Public Library', books: bookData })
  .then(data => console.log(data))
  .catch(err => console.error(err));

export default Library;
