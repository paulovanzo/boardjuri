import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as yup from "yup";
import UsuarioView from "../views/Usuario";
import Usuario from "../entities/Usuario";
import "reflect-metadata";

export default {
  async show(req: Request, res: Response) {
    const { email } = req.params;

    const UsuarioRepository = getRepository(Usuario);

    let usuario = await UsuarioRepository.findOneOrFail(email);

    return res.json(usuario);
  },

  async index(req: Request, res: Response) {
    const UsuarioRepository = getRepository(Usuario);

    let usuarios = Array();

    usuarios = await UsuarioRepository.find();

    console.log(usuarios);

    return res.json(UsuarioView.renderMany(usuarios));
  },

  async create(req: Request, res: Response) {
    const { email, senha, nome, sobrenome, rua, bairro, cidade, cep } =
      req.body;

    console.log(req.body);

    const UsuarioRepository = getRepository(Usuario);

    const data = {
      email,
      senha,
      nome,
      sobrenome,
      rua,
      bairro,
      cidade,
      cep,
    };

    const schema = yup.object().shape({
      email: yup.string().required(),
      senha: yup.string().required(),
      nome: yup.string().required().max(20),
      sobrenome: yup.string().required().max(20),
      rua: yup.string().required(),
      bairro: yup.string().required(),
      cidade: yup.string().required(),
      cep: yup.number().required(),
    });

    await schema
      .validate(data, {
        abortEarly: false,
      })
      .catch((err) => console.log(err));

    let usuario = UsuarioRepository.create(data);

    await UsuarioRepository.save(data).catch((err) => console.log(err));

    return res.status(201).json(usuario);
  },
};
