import { Router } from "express";
import {
    createLink,
    getLink,
    getLinks,
    removeLink,
    updateLink,
} from "../controllers/link.controller.js";
import {
    bodyLinkValidator,
    paramLinkValidator,
} from "../middlewares/validatorManager.js";
const router = Router();

// GET              /api/v1/links           all links
// GET              /api/v1/links/:id       single link
// POST             /api/v1/links           create link
// PATCH/PUT        /api/v1/links/:id       update link
// DELETE           /api/v1/links/:id       remove link

router.get("/", getLinks);
router.get("/:nanoLink", getLink);
router.post("/", bodyLinkValidator, createLink);
router.delete("/:id", paramLinkValidator, removeLink);
router.patch(
    "/:id",
    paramLinkValidator,
    bodyLinkValidator,
    updateLink
);

export default router;
