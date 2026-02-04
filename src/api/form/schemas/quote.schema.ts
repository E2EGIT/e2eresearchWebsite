import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuoteDocument = Document & QuoteData;

class QuotesCollection {
  firstName: string;
  lastName: string;
  Company: string;
  email: string;
  interestedIn: string[];
  details: string;
}

@Schema({ timestamps: true })
export class QuoteData {
  @Prop()
  fromEmail: string;

  @Prop()
  toEmail: string;

  @Prop()
  isMailSent: boolean;

  @Prop({ type: QuotesCollection })
  collectedData: QuotesCollection;
}

export const QuoteSchema = SchemaFactory.createForClass(QuoteData);
