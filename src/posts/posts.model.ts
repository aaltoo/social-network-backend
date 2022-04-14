/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SizeCreationAttrs {
  text: string;
}

@Table({ tableName: 'posts' })
export class Size extends Model<Size, SizeCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'S', description: 'Размер' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;
}
