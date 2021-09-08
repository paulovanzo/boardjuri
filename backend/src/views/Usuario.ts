import Usuario from "../entities/Usuario";

export default {
  render(usuario: Usuario) {
    return {
      email: usuario.email,
      //senha: usuario.senha,
      //nome: usuario.nome,
      //sobrenome: usuario.sobrenome,
      rua: usuario.rua,
      bairro: usuario.bairro,
      cidade: usuario.cidade,
      cep: usuario.cep,
    };
  },

  renderMany(usuarios: Usuario[]) {
    return usuarios.map((usuario) => this.render(usuario));
  },
};
