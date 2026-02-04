import { DemoDTO } from './dto/demo-form';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import envConfig from 'src/config/env.config';
import {
  responseErrors,
  responseMessages,
} from 'src/constant/message.constant';
import APIResponse from '../shared/dto/api-response.dto';
import { MailService } from '../shared/mail/mail.service';
import { QuotesDTO } from './dto/quote-dto';
import { SendContacts } from './dto/contact-form';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactsData, ContactsDocument } from './schemas/contacts.schema';
import { QuoteData, QuoteDocument } from './schemas/quote.schema';
import { DemoData, DemoDocument } from './schemas/demo.schema';

@Injectable()
export class FormService {
  constructor(
    private readonly mailService: MailService,
    @InjectModel(ContactsData.name)
    private readonly contactsDataModel: Model<ContactsDocument>,
    @InjectModel(DemoData.name)
    private readonly demoDataModel: Model<DemoDocument>,
    @InjectModel(QuoteData.name)
    private readonly quoteDataModel: Model<QuoteDocument>,
  ) {}

  async contactFormData(sendContacts: SendContacts) {
    const contactFormMail = await this.mailService.sendMail(
      './contact-form-template',
      envConfig.mailModule.contactRecipient,
      '[ Contact Us ] - ' + sendContacts.subject,
      {
        FirstName: sendContacts.firstName,
        LastName: sendContacts.lastName,
        Company: sendContacts.Company,
        Email: sendContacts.email,
        InterestedIn: sendContacts.interestedIn,
      },
    );
    await this.contactsDataModel.insertMany([
      {
        fromEmail: envConfig.mailModule.mailAuthUser,
        toEmail: envConfig.mailModule.contactRecipient,
        isMailSent: contactFormMail,
        collectedData: sendContacts,
      },
    ]);
    if (!contactFormMail)
      throw new InternalServerErrorException(responseErrors.SERVER_ERROR);
    return new APIResponse(true, sendContacts, responseMessages.DATA_RECEIVED);
  }

  async quoteFormData(quotesDTO: QuotesDTO) {
    const quotesEnquiryMail = await this.mailService.sendMail(
      './quotes-template',
      envConfig.mailModule.quoteRecipient,
      'Quote Enquiry',
      {
        FirstName: quotesDTO.firstName,
        LastName: quotesDTO.lastName,
        Company: quotesDTO.Company,
        Email: quotesDTO.email,
        InterestedIn: quotesDTO.interestedIn,
        Details: quotesDTO.details,
      },
    );
    await this.quoteDataModel.insertMany([
      {
        fromEmail: envConfig.mailModule.mailAuthUser,
        toEmail: envConfig.mailModule.quoteRecipient,
        isMailSent: quotesEnquiryMail,
        collectedData: quotesDTO,
      },
    ]);
    if (!quotesEnquiryMail)
      throw new InternalServerErrorException(responseErrors.SERVER_ERROR);
    return new APIResponse(
      true,
      quotesDTO,
      responseMessages.QUOTE_DATA_RECEIVED,
    );
  }

  async demoFormData(formBody: DemoDTO) {
    const mailSubject: string =
        formBody.productName == 'raven'
          ? 'Request for raven demo'
          : 'Request for inscribee demo',
      requestDemoMail = await this.mailService.sendMail(
        './demo-form-template',
        envConfig.mailModule.demoRecipient,
        mailSubject,
        {
          FirstName: formBody.firstName,
          LastName: formBody.lastName,
          Company: formBody.Company,
          Email: formBody.email,
          ProductName:
            formBody.productName === 'raven' ? 'Raven Dashboard' : 'Inscribee',
          Details: formBody.details,
        },
      );
    await this.demoDataModel.insertMany([
      {
        fromEmail: envConfig.mailModule.mailAuthUser,
        toEmail: envConfig.mailModule.demoRecipient,
        isMailSent: requestDemoMail,
        collectedData: {
          ...formBody,
          productName:
            formBody.productName === 'raven' ? 'Raven Dashboard' : 'Inscribee',
        },
      },
    ]);
    if (!requestDemoMail)
      throw new InternalServerErrorException(responseErrors.SERVER_ERROR);
    return new APIResponse(
      true,
      formBody,
      responseMessages.DEMO_REQUEST_RECEIVED,
    );
  }
}
