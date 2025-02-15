import sequelize from '../connection.js';
import { BookFactory } from './book.js';

const Book = BookFactory(sequelize);

export { sequelize, Book };
