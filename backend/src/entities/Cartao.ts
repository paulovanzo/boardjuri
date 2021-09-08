import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Pedido from "./Pedido";

@Entity("Cartao")
export default class Cartao {
  @PrimaryGeneratedColumn()
  numero: string;

  @Column()
  cvv: string;

  @Column()
  status: boolean;

  @Column()
  nome: string;

  @Column()
  vencimento: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cartao, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email_usuario_pedido" })
  pedidos: Pedido[];
}
