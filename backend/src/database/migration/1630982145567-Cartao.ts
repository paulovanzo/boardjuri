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
            name: "email_usuario",
            type: "string",
          },
        ],
        foreignKeys: [
          {
            name: "UsuarioCartao",
            columnNames: ["email_usuario"],
            referencedTableName: "Usuario",
            referencedColumnNames: ["email_usuario"],
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
