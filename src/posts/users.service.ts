import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async authenticate(body) {
    //
  }

  async createUser(dto: CreateUserDto) {
    try {
      const item = await this.userRepository.create({
        ...dto,
      });
      const createdItem = await this.userRepository.findByPk(item.id, {
        include: { all: true },
      });
      return createdItem;
    } catch (err) {
      return err;
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
