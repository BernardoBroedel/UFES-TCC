import { MigrationInterface, QueryRunner } from "typeorm";

export class default1714655609138 implements MigrationInterface {
    name = 'default1714655609138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT '2', "supervisorId" character varying, CONSTRAINT "REL_3dcbd55983fcd698c9134c2f24" UNIQUE ("supervisorId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supervisores" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, CONSTRAINT "REL_c0d5060f79c014337222690f3d" UNIQUE ("userId"), CONSTRAINT "PK_4c4224a66e4b14e19982c9bb247" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_3dcbd55983fcd698c9134c2f24b" FOREIGN KEY ("supervisorId") REFERENCES "supervisores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "supervisores" ADD CONSTRAINT "FK_c0d5060f79c014337222690f3da" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supervisores" DROP CONSTRAINT "FK_c0d5060f79c014337222690f3da"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_3dcbd55983fcd698c9134c2f24b"`);
        await queryRunner.query(`DROP TABLE "supervisores"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
