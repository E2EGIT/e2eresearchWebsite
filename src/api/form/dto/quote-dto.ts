import { ApiProperty } from '@nestjs/swagger';

export class QuotesDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  Company: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  interestedIn: string[];

  @ApiProperty()
  details: string;
}
