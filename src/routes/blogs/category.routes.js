import Router from "express";

const router = Router();


import {
    createCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    softDeleteCategory,
    toggleCategoryStatus
} from "../../controllers/blogs/category.controllers.js"

import { isAuthenticated,isAuthorizedAdmin } from "../../middlewares/authentication/auth.middleware.js";


router.route("/").post(isAuthenticated,isAuthorizedAdmin,createCategory);
router.route("/").get(getAllCategory);
router.route("/:id").get(getOneCategory)
                             .patch(isAuthenticated,isAuthorizedAdmin,updateCategory)
                             .delete(isAuthenticated,isAuthorizedAdmin,softDeleteCategory);

router.route("/status/:id").patch(isAuthenticated,isAuthorizedAdmin,toggleCategoryStatus);


export default router;