import Usuario from "../entities/Usuario";
import EnderecoView from "./Endereco";

export default {
  render(usuario: Usuario) {
    return {
      email: usuario?.email,
      senha: usuario?.senha,
      //nome: usuario.nome,
      sobrenome: usuario?.sobrenome,
      enderecos: {
        enderecos: () => {
          EnderecoView.renderMany(usuario.enderecos);
        },
      },
    };
  },

  renderMany(usuarios: Usuario[] | void) {
    return usuarios?.map((usuario) => this.render(usuario));
  },
};
