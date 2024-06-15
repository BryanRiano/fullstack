import { Table, Model, Column, PrimaryKey, DataType } from "sequelize-typescript";
import { Field, Int, ObjectType } from "type-graphql";


@Table({
    timestamps: true,
    tableName: "character",
    modelName: "Character",
})

@ObjectType()
export class Character extends Model {
    @Field(() => Int)
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
    })
    declare id: number

    @Field(() => String)
    @Column({
        type: DataType.STRING,
    })
    declare name: string

    @Field(() => String)
    @Column({
        type: DataType.STRING,
    })
    declare gender: string

    @Field(() => String)
    @Column({
        type: DataType.STRING,
    })
    declare status: string

    @Field(() => String)
    @Column({
        type: DataType.STRING,
    })
    declare specie: string

    @Field(() => String)
    @Column({
        type: DataType.STRING,
    })
    declare origin: string

}