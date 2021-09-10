import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Entity,
  OneToMany,
} from "typeorm";
import Cartao from "./Cartao";
import PedidoContemBoard from "./PedidoContemBoard";

@Entity("Pedido")
export default class Pedido {
  @PrimaryGeneratedColumn()
  numero: string;

  @Column()
  status: string;

  @Column()
  data: Date;

  @Column()
  preco_total: Number;

  @ManyToOne(() => Cartao, (cartao: Cartao) => cartao.pedidos)
  @JoinColumn({ name: "email" })
  cartao: Cartao;

  @OneToMany(
    () => PedidoContemBoard,
    (pedido: PedidoContemBoard) => pedido.board
  )
  @JoinColumn({ name: "numero" })
  contem: PedidoContemBoard[];
}
