import { Request, Response } from "express";
import Blog, { IBlog } from "../../models/blogModel/Blog";

import fs from "fs";

export const updateBlog = async (
   req: Request,
   res: Response
): Promise<void> => {
   const blogId = req.params.id;
   try {
      const existingBlog = await Blog.findById(blogId);

      if (!existingBlog) {
         res.status(404).json({ message: "Blog not found" });
         return;
      }
     
      const { title, description, category, author } = req.body;

      if (title) existingBlog.title = title;
      if (description) existingBlog.description = description;
      if (category) existingBlog.category = category;
      if (author) existingBlog.author = author;

      const updatedBlog = await existingBlog.save();

      res.status(200).json({
         message: "Blog updated successfully",
         updatedBlog,
      });
   } catch (error) {
      res.status(500).json({ message: "Error updating blog" });
   }
};
