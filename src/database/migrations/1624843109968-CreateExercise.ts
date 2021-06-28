import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExercise1624843109968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "exercises",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "duration",
                        type: "varchar"
                    },
                    {
                        name: "date",
                        type: "timestamp"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "category_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKExerciseUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"

                    },
                    {
                        name: "FKExerciseCategory",
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"

                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("exercises");
    }

}
