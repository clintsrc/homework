import { Schema, model, Document } from 'mongoose';

// TODO: Create an interface for the bookSchema
// It is done when I define a new interface for the bookSchema.
interface IBook extends Document {
    title: string;
    author: string;
    price: number;
    lastAccessed: Date;
    getDiscount(): void;
}

// TODO: Define a new schema named `bookSchema`
// It is done when I define a new schema named bookSchema.
// It is done when the new schema has three properties: title, author, and price.
const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String },
    price: { type: Number },
    lastAccessed: {type: Date, default: Date.now },
});


// TODO: Create a custom instance method named `getDiscount`
/* It is done when I assign a function named getDiscount to the methods object of 
   the bookSchema that reduces the price by 50 percent and console logs the title 
   of the book and the reduced price. */
bookSchema.methods.getDiscount = function () {
    const discountPrice = Math.round((this.price * 0.5) * 100) / 100;
    console.log(`Title: ${this.title}`);
    console.log(`Price was: $${this.price}`);
    console.log(`Discount: $${discountPrice}`);
};

// TODO: Create a model named `Book`
// It is done when I have created a model named Book.
const Book = model('Book', bookSchema);

// TODO: Create a new instance of the model
// It is done when I have created an instance of the model, or document, named discountedBook.
const discountedBook = new Book({ title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 15.95 });

// TODO: Call the custom instance method on the instance
// It is done when I test the instance method by running npm run start.
// It is done when the price of discountedBook is reduced by 50 percent and the results are logged to the console.
discountedBook.getDiscount();

export default Book;
