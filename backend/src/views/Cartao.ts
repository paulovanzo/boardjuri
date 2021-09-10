import Cartao from "../entities/Cartao";
import Pedido from "../entities/Pedido";
import Usuario from "../entities/Usuario";

export default {
  render(cartao: Cartao) {
    usuarios: cartao.usuarios.map((usuario: Usuario) => {
      email: usuario.email;
    });
    nome: cartao.nome;
    numero: cartao.numero;
    vencimento: cartao.vencimento;
    status: cartao.status;
    cvv: cartao.cvv;
    pedidos: cartao.pedidos?.map((pedido: Pedido) => {
      numero: pedido.numero;
      data: pedido.data;
      preco_total: pedido.preco_total;
    });
  },

  renderMany(cartoes: Cartao[]) {
    return cartoes.map((cartao) => this.render(cartao));
  },
};
