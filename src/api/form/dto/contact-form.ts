import { ApiProperty } from '@nestjs/swagger';

export class SendContacts {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  Company: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  interestedIn: string;
}
