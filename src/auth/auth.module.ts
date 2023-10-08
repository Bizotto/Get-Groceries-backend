import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { SessionSerializer } from './utils/Serializer';

@Module({
  controllers: [AuthController],
  providers: [
    PrismaService,
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
