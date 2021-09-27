import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as yup from "yup";
import UsuarioView from "../views/Usuario";
import Usuario from "../entities/Usuario";

export default {
  async show(req: Request, res: Response) {
    const { email } = req.params;

    const UsuarioRepository = getRepository(Usuario);

    let usuario = await UsuarioRepository.findOneOrFail(email).catch((err) =>
      console.log(err)
    );

    return res.json(usuario);
  },

  async index(req: Request, res: Response) {
    const UsuarioRepository = getRepository(Usuario);

    const usuarios = await UsuarioRepository.find().catch((err) =>
      console.log(err)
    );

    return res.json(UsuarioView.renderMany(usuarios));
  },

  async create(req: Request, res: Response) {
    const { email, senha, nome, sobrenome, nascimento } = req.body;

    console.log(req.body);

    const UsuarioRepository = getRepository(Usuario);

    const data = {
      email,
      senha,
      nome,
      sobrenome,
      nascimento,
    };

    const schema = yup.object().shape({
      email: yup.string().required().max(50),
      senha: yup.string().required().max(50),
      nome: yup.string().required().max(20),
      sobrenome: yup.string().required().max(20),
      nascimento: yup.date(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    let usuario = UsuarioRepository.create(data);

    await UsuarioRepository.save(data);

    return res.status(201).json(usuario);
  },
};
