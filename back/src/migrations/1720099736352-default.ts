import { MigrationInterface, QueryRunner } from "typeorm";

export class default1720099736352 implements MigrationInterface {
    name = 'default1720099736352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" RENAME COLUMN "sobreorelhadireita" TO "sobre_orelha_direita"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes" RENAME COLUMN "sobre_orelha_direita" TO "sobreorelhadireita"`);
    }

}
