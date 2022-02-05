import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.BACKEND_PORT || 8080);
}
bootstrap();
