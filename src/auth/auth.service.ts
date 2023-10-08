import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ValidateUser } from './utils/dto/validate-user-dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(details: ValidateUser) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: details.email,
      },
    });

    if (user) return user;

    return await this.prisma.user.create({
      data: {
        email: details.email,
        name: details.name,
      },
    });
  }

  async findUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
