import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Entity,
} from "typeorm";
import Cartao from "./Cartao";

@Entity("Pedido")
export default class Pedido {
  @PrimaryGeneratedColumn()
  numero: string;

  @Column()
  status: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @ManyToOne(() => Cartao, (cartao) => cartao.pedidos)
  @JoinColumn({ name: "orphanage_id" })
  email: string;
}
