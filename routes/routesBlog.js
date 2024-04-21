import express from 'express';
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.get('/:id', getBlog);
blogRouter.post('/', createBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);

export default blogRouter;