import { NestFactory } from '@nestjs/core';
import { MsgModule } from './msg/msg.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MsgModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
