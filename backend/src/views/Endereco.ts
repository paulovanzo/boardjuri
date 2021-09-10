import Endereco from "../entities/Endereco";

export default {
  render(endereco: Endereco | undefined) {
    email: endereco?.usuario.email;
    rua: endereco?.rua;
    bairro: endereco?.bairro;
    cidade: endereco?.cidade;
    cep: endereco?.cep;
    numero: endereco?.cep;
  },

  renderMany(enderecos: Endereco[] | undefined) {
    return enderecos?.map((endereco) => this.render(endereco));
  },
};
