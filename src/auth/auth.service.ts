import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ValidateUser } from './utils/dto/validate-user-dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(details: ValidateUser) {
    console.log('details', details);

    const user = await this.prisma.user.findFirst({
      where: {
        email: details.email,
      },
    });

    console.log('user', user);

    if (user) return user;

    const newUser = await this.prisma.user.create({
      data: {
        email: details.email,
        name: details.name,
      },
    });

    console.log('newUser', newUser);
  }
}
