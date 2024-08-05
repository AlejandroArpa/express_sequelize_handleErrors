import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { Animes } from "./";

@Table({
	tableName: 'directors',
	timestamps: true,
})

export class Directors extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.STRING, allowNull: false}
	)
	name!: string;

	@HasMany(() => Animes)
	animes!: Animes[];
}