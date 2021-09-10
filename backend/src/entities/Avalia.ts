import { Column, Entity, ManyToOne, JoinColumn, Index } from "typeorm";
import Usuario from "./Usuario";
import Boardgame from "./Boardgame";

@Entity("Avalia")
@Index(["board", "usuario"])
export default class Avalia {
  @Column()
  complexidade: number;

  @Column()
  avaliacao: number;

  @Column()
  rejogabilidade: number;

  @Column()
  comentario: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.avaliacoes, {
    primary: true,
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email" })
  usuario: Usuario;

  @ManyToOne(() => Boardgame, (board: Boardgame) => board.avaliacoes, {
    primary: true,
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "id" })
  board: Boardgame;
}
