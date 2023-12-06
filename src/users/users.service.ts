import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
<<<<<<< HEAD
=======
import NormalizedResponse from 'src/utils/normalized-response';
>>>>>>> 4356d64d395181e18b5f7ab3a3af45ad96ee7a62

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto) {
<<<<<<< HEAD
    const createdUser = await this.prisma.users.create({
      data: {
        Pseudo: createUserDto.pseudo,
        Mail: createUserDto.mail,
      },
    });
    return createdUser;
=======
    const createdUser = new NormalizedResponse(
      `User ${createUserDto.pseudo} has been created`,
      await this.prisma.users.create({
        data: {
          user_pseudo: createUserDto.pseudo,
          username: createUserDto.username,
          user_password: createUserDto.password,
          created_at: createUserDto.created_at,
        },
      }),
    );
    return createdUser.toJSON();
>>>>>>> 4356d64d395181e18b5f7ab3a3af45ad96ee7a62
  }

  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: string) {
<<<<<<< HEAD
    const gettedUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    });
    return gettedUser;
=======
    const gettedUser = new NormalizedResponse(
      `User ${uuid} has been found`,
      await this.prisma.users.findUnique({
        where: {
          user_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
>>>>>>> 4356d64d395181e18b5f7ab3a3af45ad96ee7a62
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = new NormalizedResponse(
      `User ${updateUserDto.pseudo} has been updated`,
      await this.prisma.users.update({
        where: {
          user_UUID: uuid,
        },
        data: {
          user_pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
          username: !!updateUserDto.username ? updateUserDto.username : undefined,
          user_password: !!updateUserDto.password ? updateUserDto.password : undefined,
        },
      }),
    );
    return updatedUser.toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.users.delete({
        where: {
          user_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }
}