import express from 'express';
import { createItem, getAllItem, getItem, updateItem } from '../controllers/ItemController.js';

const itemRouter = express.Router();

itemRouter.get('/', getAllItem);
itemRouter.get('/:id', getItem);
itemRouter.post('/', createItem);
itemRouter.put('/:id', updateItem);

export default itemRouter;