import Usuario from "../entities/Usuario";

export default {
  render(usuario: Usuario) {
    return {
      email: usuario.email,
      //senha: usuario.senha,
      //nome: usuario.nome,
      //sobrenome: usuario.sobrenome,
      enderecos: usuario.enderecos.map((endereco, i) => {
        rua: endereco.rua;
        bairro: endereco.bairro;
        cidade: endereco.cidade;
        cep: endereco.cep;
        numero: endereco.cep;
      }),
    };
  },

  renderMany(usuarios: Usuario[]) {
    return usuarios.map((usuario) => this.render(usuario));
  },
};
