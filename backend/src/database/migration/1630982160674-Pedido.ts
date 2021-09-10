import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Pedido1630982160674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Pedido",
        columns: [
          {
            name: "numero",
            type: "string",
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: "cvv",
            type: "number",
          },
          {
            name: "status",
            type: "boolean",
          },
          {
            name: "preco_total",
            type: "double",
          },
          {
            name: "email",
            type: "string",
          },
          {
            name: "cartao_numero",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "UsuarioPedido",
            columnNames: ["email"],
            referencedTableName: "Usuario",
            referencedColumnNames: ["email"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          {
            name: "CartaoPedido",
            columnNames: ["cartao_numero"],
            referencedTableName: "Cartao",
            referencedColumnNames: ["cartao_numero"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
