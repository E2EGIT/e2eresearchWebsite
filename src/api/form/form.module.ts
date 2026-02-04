import { Module } from '@nestjs/common';
import { MailModule } from '../shared/mail/mail.module';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DemoData, DemoSchema } from './schemas/demo.schema';
import { ContactsData, ContactsSchema } from './schemas/contacts.schema';
import { QuoteData, QuoteSchema } from './schemas/quote.schema';

@Module({
  imports: [
    MailModule,
    MongooseModule.forFeature([
      { name: ContactsData.name, schema: ContactsSchema },
      { name: DemoData.name, schema: DemoSchema },
      { name: QuoteData.name, schema: QuoteSchema },
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
