import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    session({
      secret: 'NicolasLucasCarlos',
      resave: false,
      cookie: {
        maxAge: 3600000,
      },
    }),
  );

  app.use(passport.session());
  app.use(passport.initialize());
  await app.listen(3333);
}
bootstrap();
