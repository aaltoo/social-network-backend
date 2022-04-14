/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SizeCreationAttrs {
  text: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, SizeCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'S', description: 'Текст' })
  @Column({ type: DataType.STRING, allowNull: false })
  text: string;
}
