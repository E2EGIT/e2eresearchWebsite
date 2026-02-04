import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DemoDocument = Document & DemoData;

class DemoCollection {
  firstName: string;
  lastName: string;
  Company: string;
  email: string;
  productName: string;
  details: string;
}

@Schema({ timestamps: true })
export class DemoData {
  @Prop()
  fromEmail: string;

  @Prop()
  toEmail: string;

  @Prop()
  isMailSent: boolean;

  @Prop({ type: DemoCollection })
  collectedData: DemoCollection;
}

export const DemoSchema = SchemaFactory.createForClass(DemoData);
