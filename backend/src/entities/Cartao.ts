import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
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

  @OneToMany(() => Pedido, (pedido) => pedido.email, {
    cascade: ["insert", "update"],
  })
  pedidos: Pedido[];
}
