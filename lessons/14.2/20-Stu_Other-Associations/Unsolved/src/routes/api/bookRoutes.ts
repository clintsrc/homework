import { Router } from 'express';
import { Book } from '../../models/index.js';

const router = Router();

// TODO: GET all books and associated data
router.get('/', async (_req, res) => {});

// TODO: GET a single book and associated data
router.get('/:id', async (req, res) => {});

// CREATE a book
router.post('/', async (req, res) => {
  try {
    const bookData = await Book.create(req.body);
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a book
router.delete('/:id', async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with that id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
