import Cartao from "../entities/Cartao";
import Pedido from "../entities/Pedido";
import Usuario from "../entities/Usuario";

export default {
  render(cartao: Cartao) {
    usuarios: cartao.usuario;
    nome: cartao.nome;
    numero: cartao.numero;
    vencimento: cartao.vencimento;
    status: cartao.status;
    cvv: cartao.cvv;
    pedidos: cartao.pedidos;
  },

  renderMany(cartoes: Cartao[]) {
    return cartoes.map((cartao) => this.render(cartao));
  },
};
