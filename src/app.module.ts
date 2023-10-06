import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './categories/categories.module';
import { PrismaService } from './database/prisma.service';
import { ListModule } from './lists/list.module';
import { ProductModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    CategoryModule,
    ListModule,
    AuthModule,
    PassportModule.register({ session: true }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
