import { Module } from '@nestjs/common';
import { FormModule } from './api/form/form.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import envConfig from './config/env.config';

@Module({
  imports: [FormModule, MongooseModule.forRoot(envConfig.mongoose.url)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
