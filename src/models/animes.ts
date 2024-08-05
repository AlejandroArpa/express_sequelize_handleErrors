import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne } from "sequelize-typescript";
import { Studios, Directors } from "./";

@Table({
	tableName: 'animes',
	timestamps: true,
})

export class Animes extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.STRING, allowNull: false}
	)
	title!: string;

	@Column(
		{
			type: DataType.STRING,
			allowNull: false,
		}
	)
	genre!: string;

	@ForeignKey(() => Studios)
	@Column({type:DataType.INTEGER, allowNull: false})
	studioId!: number;

	@BelongsTo(() => Studios)
	studio!: Studios;

	@ForeignKey(() => Directors)
	@Column({type:DataType.INTEGER, allowNull: false})
	directorId!: number;

	@BelongsTo(() => Directors)
	director!: Directors;
}