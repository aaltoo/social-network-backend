import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Jacob', description: 'username' })
  readonly username: string;
  @ApiProperty({ example: 'jake@jake.jake', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: 'jakejake', description: 'password' })
  readonly password: string;
}
