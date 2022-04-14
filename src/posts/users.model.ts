import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SizeCreationAttrs {
  text: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, SizeCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'jake@jake.jake', description: 'email' })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({ example: 'jwt.token.here', description: 'jwt token' })
  @Column({ type: DataType.STRING, allowNull: false })
  token: string;

  @ApiProperty({ example: 'jake', description: 'username' })
  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @ApiProperty({ example: 'I work at statefarm', description: 'bio' })
  @Column({ type: DataType.STRING })
  bio: string;

  @ApiProperty({ description: null })
  @Column({ type: DataType.STRING })
  image: string;
}
