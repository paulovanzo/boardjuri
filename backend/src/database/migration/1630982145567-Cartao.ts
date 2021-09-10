import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cartao1630982145567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Cartao",
        columns: [
          {
            name: "cartao_numero",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "status",
            type: "boolean",
          },
          {
            name: "nome",
            type: "string",
          },
          {
            name: "vencimento",
            type: "Date",
          },
          {
            name: "cvv",
            type: "integer",
          },
          {
            name: "email",
            type: "string",
          },
        ],
        foreignKeys: [
          {
            name: "UsuarioCartao",
            columnNames: ["email"],
            referencedTableName: "Usuario",
            referencedColumnNames: ["email"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Pessoa");
  }
}
