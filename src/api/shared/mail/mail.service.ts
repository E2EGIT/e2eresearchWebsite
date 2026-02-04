import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}
  async sendMail(
    templatePath: string,
    recipient: string,
    subject: string,
    context?: object,
    cc?: string,
  ) {
    try {
      await this.mailService.sendMail({
        to: recipient,
        subject,
        template: templatePath,
        context,
        cc: cc,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
