import Pessoa from "../entities/Pessoa";

export default {
  render(pessoa: Pessoa) {
    return {
      email: pessoa.email,
      senha: pessoa.senha,
      nome: pessoa.nome,
      sobrenome: pessoa.sobrenome,
    };
  },

  renderMany(pessoas: Pessoa[]) {
    return pessoas.map((pessoa) => this.render(pessoa));
  },
};
