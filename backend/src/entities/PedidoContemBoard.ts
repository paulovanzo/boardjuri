import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  JoinColumn,
  Index,
  PrimaryColumn,
} from "typeorm";
import Pedido from "./Pedido";
import Boardgame from "./Boardgame";

@Entity("PedidoContemBoard")
export default class PedidoContemBoard {
  @Column()
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido: Pedido) => pedido.contem, { primary: true })
  @JoinColumn({ name: "pedido_numero" })
  numero: Pedido;

  @OneToOne(() => Boardgame, (board: Boardgame) => board.pedido, {
    primary: true,
  })
  @JoinColumn({ name: "id" })
  board: Boardgame;
}
