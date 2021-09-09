import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Endereco1631134056535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Endereco",
        columns: [
          {
            name: "id",
            type: "number",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "rua",
            type: "string",
          },
          {
            name: "bairro",
            type: "string",
          },
          {
            name: "cidade",
            type: "string",
          },
          {
            name: "numero",
            type: "number",
          },
          {
            name: "cep",
            type: "number",
          },
        ],
        foreignKeys: [
          {
            name: "UsuarioEndereco",
            columnNames: ["email_usuario_endereco"],
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
    await queryRunner.dropTable("Endereco");
  }
}
