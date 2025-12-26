import Router from "express";

const router = Router();

import {
    createBlog,
    getBlogById,
    getBlogs,
    deleteBlog
} from "../../controllers/blogs/blogs.controllers.js"
import { isAuthenticated,isAuthorizedAdmin,isAuthorizedUser } from "../../middlewares/authentication/auth.middleware.js";

router.route("/").post(isAuthenticated,isAuthorizedAdmin,createBlog);
router.route("/blogs").get(getBlogs);
router.route("/blog/:id").get(getBlogById)
                         .delete(isAuthenticated,deleteBlog);




export default router;