import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { Animes } from "./";

@Table({
	tableName: 'studios',
	timestamps: true,
})

export class Studios extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.STRING, allowNull: false}
	)
	name!: string;

	@Column(
		{
			type: DataType.STRING,
			allowNull: false,
		}
	)
	genre!: string;

	@HasMany(() => Animes)
	Anime!: Animes[];
	
}