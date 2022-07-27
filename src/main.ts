import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3001;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => {
    Logger.verbose(`Server is running on PORT ${PORT}`, 'NestApplication');
  });
}
bootstrap();
