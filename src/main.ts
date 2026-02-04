import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import envConfig from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', allowedHeaders: '*', methods: '*' });
  const config = new DocumentBuilder()
    .setTitle('E2E-Form')
    .setDescription('Capturing Form Data')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const PORT = envConfig.port;
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
