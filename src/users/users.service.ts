import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async authenticate(body) {
    //
  }

  async createUser(dto: CreateUserDto) {
    try {
      const saltRounds = 10;
      const hash = await bcrypt.hash(dto.password, saltRounds);
      await this.userRepository.create({
        ...dto,
        password: hash,
      });
      const user = await this.userRepository.findOne({
        where: { username: dto.username },
      });
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getUserByUsername(username) {
    try {
      return await this.userRepository.findOne({
        where: { username: username },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async getUsers() {
    return await this.userRepository.findAll();
  }

  async getCurrentUser() {
    //
  }

  async updateUser() {
    //
  }
}
