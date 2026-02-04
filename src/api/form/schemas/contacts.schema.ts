import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactsDocument = Document & ContactsData;

class ContactsCollection {
  firstName: string;
  lastName: string;
  Company: string;
  email: string;
  subject: string;
  interestedIn: string;
}

@Schema({ timestamps: true })
export class ContactsData {
  @Prop()
  fromEmail: string;

  @Prop()
  toEmail: string;

  @Prop()
  isMailSent: boolean;

  @Prop({ type: ContactsCollection })
  collectedData: ContactsCollection;
}

export const ContactsSchema = SchemaFactory.createForClass(ContactsData);
