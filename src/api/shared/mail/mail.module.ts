import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import envConfig from 'src/config/env.config';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: envConfig.mailModule.mailHost,
        secure: false,
        auth: {
          user: envConfig.mailModule.mailAuthUser,
          pass: envConfig.mailModule.mailAuthPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: envConfig.mailModule.mailAuthUser,
      },
      template: {
        dir: join(__dirname, '..', '..', '..', '..', '/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
