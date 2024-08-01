import { MigrationInterface, QueryRunner } from "typeorm";

export class default1720098489431 implements MigrationInterface {
    name = 'default1720098489431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "imagens" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "data" bytea NOT NULL, "mimeType" character varying NOT NULL, "nomeImagem" character varying NOT NULL, CONSTRAINT "PK_7422c88c17289e80e789ce8819c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessoes" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "data" character varying, "pacienteId" character varying, CONSTRAINT "PK_c2a5880f0d471e675eacc8e5714" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "anexos" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "data" bytea NOT NULL, "mimeType" character varying NOT NULL, "nomeAnexo" character varying NOT NULL, "pacienteId" character varying, CONSTRAINT "PK_da398d73b0fa1e7549520adc9f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pacientes_reabilitadores_reabilitadores" ("pacientesId" character varying NOT NULL, "reabilitadoresId" character varying NOT NULL, CONSTRAINT "PK_4df3907d11de1adac40b868a941" PRIMARY KEY ("pacientesId", "reabilitadoresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_37853ffdd4681bf02e66d88290" ON "pacientes_reabilitadores_reabilitadores" ("pacientesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_36d575725e30e2523a4578e912" ON "pacientes_reabilitadores_reabilitadores" ("reabilitadoresId") `);
        await queryRunner.query(`ALTER TABLE "supervisores" ADD "imagemId" character varying`);
        await queryRunner.query(`ALTER TABLE "supervisores" ADD CONSTRAINT "UQ_1c18fbf8aff25bd66ba78f26ded" UNIQUE ("imagemId")`);
        await queryRunner.query(`CREATE TYPE "public"."reabilitadores_edp_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" ADD "edp" "public"."reabilitadores_edp_enum" NOT NULL DEFAULT '0'`);
        await queryRunner.query(`CREATE TYPE "public"."reabilitadores_situacao_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" ADD "situacao" "public"."reabilitadores_situacao_enum" NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" ADD "imagemId" character varying`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" ADD CONSTRAINT "UQ_5ebb24d8e0bb66bf0dd416e636e" UNIQUE ("imagemId")`);
        await queryRunner.query(`CREATE TYPE "public"."pacientes_situacao_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "situacao" "public"."pacientes_situacao_enum" NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "cpf" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "rg" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "sobreorelhadireita" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "marca_orelha_direita" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "modelo_orelha_direita" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "sobre_orelha_esquerda" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "marca_orelha_esquerda" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "modelo_orelha_esquerda" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "imagemId" character varying`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "UQ_50877dd5341c5eb7165e9aedefb" UNIQUE ("imagemId")`);
        await queryRunner.query(`ALTER TABLE "supervisores" ADD CONSTRAINT "FK_1c18fbf8aff25bd66ba78f26ded" FOREIGN KEY ("imagemId") REFERENCES "imagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" ADD CONSTRAINT "FK_5ebb24d8e0bb66bf0dd416e636e" FOREIGN KEY ("imagemId") REFERENCES "imagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessoes" ADD CONSTRAINT "FK_04778c72848ac8a3c7bd627c52e" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "FK_50877dd5341c5eb7165e9aedefb" FOREIGN KEY ("imagemId") REFERENCES "imagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anexos" ADD CONSTRAINT "FK_5da0d8b621a238a1df29023d260" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes_reabilitadores_reabilitadores" ADD CONSTRAINT "FK_37853ffdd4681bf02e66d88290a" FOREIGN KEY ("pacientesId") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pacientes_reabilitadores_reabilitadores" ADD CONSTRAINT "FK_36d575725e30e2523a4578e9127" FOREIGN KEY ("reabilitadoresId") REFERENCES "reabilitadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes_reabilitadores_reabilitadores" DROP CONSTRAINT "FK_36d575725e30e2523a4578e9127"`);
        await queryRunner.query(`ALTER TABLE "pacientes_reabilitadores_reabilitadores" DROP CONSTRAINT "FK_37853ffdd4681bf02e66d88290a"`);
        await queryRunner.query(`ALTER TABLE "anexos" DROP CONSTRAINT "FK_5da0d8b621a238a1df29023d260"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "FK_50877dd5341c5eb7165e9aedefb"`);
        await queryRunner.query(`ALTER TABLE "sessoes" DROP CONSTRAINT "FK_04778c72848ac8a3c7bd627c52e"`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" DROP CONSTRAINT "FK_5ebb24d8e0bb66bf0dd416e636e"`);
        await queryRunner.query(`ALTER TABLE "supervisores" DROP CONSTRAINT "FK_1c18fbf8aff25bd66ba78f26ded"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "UQ_50877dd5341c5eb7165e9aedefb"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "imagemId"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "modelo_orelha_esquerda"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "marca_orelha_esquerda"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "sobre_orelha_esquerda"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "modelo_orelha_direita"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "marca_orelha_direita"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "sobreorelhadireita"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "rg"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "situacao"`);
        await queryRunner.query(`DROP TYPE "public"."pacientes_situacao_enum"`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" DROP CONSTRAINT "UQ_5ebb24d8e0bb66bf0dd416e636e"`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" DROP COLUMN "imagemId"`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" DROP COLUMN "situacao"`);
        await queryRunner.query(`DROP TYPE "public"."reabilitadores_situacao_enum"`);
        await queryRunner.query(`ALTER TABLE "reabilitadores" DROP COLUMN "edp"`);
        await queryRunner.query(`DROP TYPE "public"."reabilitadores_edp_enum"`);
        await queryRunner.query(`ALTER TABLE "supervisores" DROP CONSTRAINT "UQ_1c18fbf8aff25bd66ba78f26ded"`);
        await queryRunner.query(`ALTER TABLE "supervisores" DROP COLUMN "imagemId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_36d575725e30e2523a4578e912"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_37853ffdd4681bf02e66d88290"`);
        await queryRunner.query(`DROP TABLE "pacientes_reabilitadores_reabilitadores"`);
        await queryRunner.query(`DROP TABLE "anexos"`);
        await queryRunner.query(`DROP TABLE "sessoes"`);
        await queryRunner.query(`DROP TABLE "imagens"`);
    }

}
