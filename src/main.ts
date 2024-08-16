import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const port: string | number = process.env.PORT || 5500;
  const globalPrefix: string = 'api/v1';

  const app: NestApplication =
    await NestFactory.create<NestApplication>(AppModule);

  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application listening on http://0.0.0.0:${port}/${globalPrefix}`,
  );
}

bootstrap();
