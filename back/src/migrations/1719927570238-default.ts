import { MigrationInterface, QueryRunner } from "typeorm";

export class default1719927570238 implements MigrationInterface {
    name = 'default1719927570238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reabilitadores" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying, "matricula" character varying, "semestre" character varying, "userId" character varying, CONSTRAINT "REL_6f2e26061f0b269d0c7083d480" UNIQUE ("userId"), CONSTRAINT "PK_504b55c5a5ca335d437357cc02f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."pacientes_edp_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "pacientes" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying, "edp" "public"."pacientes_edp_enum" NOT NULL DEFAULT '0', "prontuario" character varying, "nascimento" character varying, "userId" character varying, CONSTRAINT "REL_1e08e2368106ee357a62a28744" UNIQUE ("userId"), CONSTRAINT "PK_aa9c9f624ff22fc06c44d8b1609" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "supervisores" ADD "nome" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "reabilitadorId" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_c3b3ea83f111ff633b6bb0006d3" UNIQUE ("reabilitadorId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "pacienteId" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fd044371c50984a598e2f43b84d" UNIQUE ("pacienteId")`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" ADD CONSTRAINT "FK_6f2e26061f0b269d0c7083d4801" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_c3b3ea83f111ff633b6bb0006d3" FOREIGN KEY ("reabilitadorId") REFERENCES "reabilitadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_fd044371c50984a598e2f43b84d" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "FK_1e08e2368106ee357a62a287447" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "FK_1e08e2368106ee357a62a287447"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_fd044371c50984a598e2f43b84d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_c3b3ea83f111ff633b6bb0006d3"`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" DROP CONSTRAINT "FK_6f2e26061f0b269d0c7083d4801"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fd044371c50984a598e2f43b84d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "pacienteId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_c3b3ea83f111ff633b6bb0006d3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reabilitadorId"`);
        await queryRunner.query(`ALTER TABLE "supervisores" DROP COLUMN "nome"`);
        await queryRunner.query(`DROP TABLE "pacientes"`);
        await queryRunner.query(`DROP TYPE "public"."pacientes_edp_enum"`);
        await queryRunner.query(`DROP TABLE "reabilitadores"`);
    }

}
