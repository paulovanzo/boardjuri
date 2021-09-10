import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import EnderecoController from "../controllers/EnderecoController";

const router = Router();

router.get("/Usuarios", UsuarioController.index);
router.get("/Usuario/:email", UsuarioController.show);
router.post("/register", UsuarioController.create);

router.get("/Enderecos/:email", EnderecoController.index);
router.get("/Endereco/:email", EnderecoController.show);
router.post("/register/Endereco", EnderecoController.create);

export default router;
