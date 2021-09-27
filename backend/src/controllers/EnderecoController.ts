import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as yup from "yup";
import Endereco from "../entities/Endereco";
import Usuario from "../entities/Usuario";
import "reflect-metadata";

export default {
  async show(req: Request, res: Response) {
    const { email } = req.params;

    const EnderecoRepository = getRepository(Endereco);

    let endereco = await EnderecoRepository.find({ usuario: { email: email } });

    return res.json(endereco);
  },

  async create(req: Request, res: Response) {
    const { rua, bairro, cidade, numero, cep, email } = req.body;

    const UsuarioRepository = getRepository(Usuario);

    const data = {
      rua,
      bairro,
      cidade,
      numero,
      cep,
      usuario: {
        avaliacoes: Object(),
        cartoes: Object(),
        email: Object(),
        listas: Object(),
        nascimento: Object(),
        nome: Object(),
        senha: Object(),
        sobrenome: Object(),
        enderecos: Object(),
      },
    };

    const schema = yup.object().shape({
      rua: yup.string().required().max(50),
      bairro: yup.string().required().max(50),
      cidade: yup.string().required().max(20),
      numero: yup.number().required(),
      cep: yup.number().required(),
      usuario: yup
        .object({
          avaliacoes: yup.object(),
          cartoes: yup.object(),
          email: yup.object(),
          listas: yup.object(),
          nascimento: yup.object(),
          nome: yup.object(),
          senha: yup.object(),
          sobrenome: yup.object(),
          enderecos: yup.object(),
        })
        .required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    let usuario = await UsuarioRepository.findOne({
      where: { email: email },
    });

    data.usuario.avaliacoes = usuario?.avaliacoes;
    data.usuario.cartoes = usuario?.cartoes;
    data.usuario.email = usuario?.email;
    data.usuario.listas = usuario?.listas;
    data.usuario.nascimento = usuario?.nascimento;
    data.usuario.nome = usuario?.nome;
    data.usuario.sobrenome = usuario?.sobrenome;
    data.usuario.senha = usuario?.senha;
    usuario?.enderecos?.push({ rua, bairro, cidade, numero, cep, usuario });
    data.usuario.enderecos = usuario?.enderecos;

    await UsuarioRepository.save(data.usuario);

    const EnderecoRepository = getRepository(Endereco);

    let endereco = await EnderecoRepository.create(data);

    await EnderecoRepository.save(data);

    return res.status(201).json(endereco);
  },
};
