import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Boardgame1631249348050 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Boardgame",
        columns: [
          {
            name: "id",
            type: "number",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "tipo",
            type: "number",
          },
          {
            name: "empresa",
            type: "string",
          },
          {
            name: "preco",
            type: "string",
          },
          {
            name: "estoque",
            type: "string",
          },
        ],
        foreignKeys: [
          {
            name: "lista",
            columnNames: ["lista"],
            referencedTableName: "ListaInteresse",
            referencedColumnNames: ["descr"],
            onUpdate: "CASCADE",
          },
          {
            name: "id",
            columnNames: ["id"],
            referencedTableName: "PedidoContemBoard",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Boardgame");
  }
}
