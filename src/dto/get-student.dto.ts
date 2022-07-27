import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class StudentsQueryParamDto {
  @ApiProperty({ enum: [1, -1], required: false })
  @IsOptional()
  sort?: number;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  nationalityName: string;
}
