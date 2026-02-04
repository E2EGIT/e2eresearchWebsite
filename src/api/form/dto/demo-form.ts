import { ApiProperty } from '@nestjs/swagger';

export class DemoDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  Company: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  productName: string;

  @ApiProperty()
  details: string;
}
