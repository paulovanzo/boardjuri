import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PedidoContemBoard1631255179681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "PedidoContemBoard",
        columns: [
          {
            name: "quantidade",
            type: "number",
          },
        ],
        foreignKeys: [
          {
            name: "numero",
            columnNames: ["numero"],
            referencedTableName: "PedidoContemBoard",
            referencedColumnNames: ["numero"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          {
            name: "id",
            columnNames: ["id"],
            referencedTableName: "Boardgame",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("PedidoContemBoard");
  }
}
