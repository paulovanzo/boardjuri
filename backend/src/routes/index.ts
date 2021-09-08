import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = Router();

router.get("/Usuario", UsuarioController.index);
router.get("/Usuario/:email", UsuarioController.show);
router.post("/Usuario", UsuarioController.create);

export default router;
