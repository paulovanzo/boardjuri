import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import ListaInteresse from "./ListaInteresse";
import PedidoContemBoard from "./PedidoContemBoard";
import Avalia from "./PedidoContemBoard";

@Entity("Boardgame")
export default class Boardgame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: number;

  @Column()
  empresa: string;

  @Column()
  preco: string;

  @Column()
  estoque: string;

  @OneToOne(
    () => PedidoContemBoard,
    (pedido: PedidoContemBoard) => pedido.board,
    {
      cascade: ["insert", "update"],
      onDelete: "CASCADE",
    }
  )
  @JoinColumn({ name: "id" })
  pedido: PedidoContemBoard;

  @ManyToMany(() => ListaInteresse, (lista: ListaInteresse) => lista.boards)
  @JoinColumn({ name: "lista" })
  lista: ListaInteresse[];

  @OneToMany(() => Avalia, (avalia: Avalia) => avalia.board, {
    cascade: ["insert", "update"],
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "id" })
  avaliacoes: Avalia[];
}
