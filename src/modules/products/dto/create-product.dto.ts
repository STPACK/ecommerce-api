import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // <-- เพิ่มเข้ามา

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 15 Pro Max', description: 'Product name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 1599.99, description: 'Product price' })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'The latest iPhone model with A17 chip',
    description: 'Product description',
  })
  @IsString()
  description: string;
}
