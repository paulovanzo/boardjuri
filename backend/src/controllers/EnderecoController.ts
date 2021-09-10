import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as yup from "yup";
import EnderecoView from "../views/Endereco";
import Endereco from "../entities/Endereco";
import "reflect-metadata";

export default {
  async show(req: Request, res: Response) {
    const { email } = req.params;

    const EnderecoRepository = getRepository(Endereco);

    let endereco = await EnderecoRepository.find({ usuario: { email: email } });

    return res.json(endereco);
  },

  async index(req: Request, res: Response) {
    const EnderecoRepository = getRepository(Endereco);

    let enderecos = Array();

    enderecos = await EnderecoRepository.find();

    return res.json(EnderecoView.renderMany(enderecos));
  },

  async create(req: Request, res: Response) {
    const { rua, bairro, cidade, numero, cep } = req.body;
    const { email } = req.params;

    const EnderecoRepository = getRepository(Endereco);

    const data = {
      rua,
      bairro,
      cidade,
      numero,
      cep,
      email,
    };

    const schema = yup.object().shape({
      rua: yup.string().required().max(50),
      bairro: yup.string().required().max(50),
      cidade: yup.string().required().max(20),
      numero: yup.number().required().max(5),
      cep: yup.number().required().max(10),
      email: yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    let endereco = EnderecoRepository.create(data);

    await EnderecoRepository.save(data);

    return res.status(201).json(endereco);
  },
};
