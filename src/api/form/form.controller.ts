import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuotesDTO } from './dto/quote-dto';
import { SendContacts } from './dto/contact-form';
import { FormService } from './form.service';
import { DemoDTO } from './dto/demo-form';

@Controller('/api/form')
@ApiTags('Form-Handling')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('/contactform')
  async contactFormData(
    @Body()
    sendContacts: SendContacts,
  ) {
    return await this.formService.contactFormData(sendContacts);
  }

  @Post('/quote')
  async quoteFormData(
    @Body()
    quotesDTO: QuotesDTO,
  ) {
    return await this.formService.quoteFormData(quotesDTO);
  }

  @Post('/demorequest')
  async demoFormData(
    @Body()
    formBody: DemoDTO,
  ) {
    return await this.formService.demoFormData(formBody);
  }
}
