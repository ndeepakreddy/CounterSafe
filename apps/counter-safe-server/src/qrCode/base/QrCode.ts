/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Product } from "../../product/base/Product";
import { Register } from "../../register/base/Register";
import { Scanned } from "../../scanned/base/Scanned";

@ObjectType()
class QrCode {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isScanned!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => Product,
  })
  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  product?: Product | null;

  @ApiProperty({
    required: false,
    type: () => [Register],
  })
  @ValidateNested()
  @Type(() => Register)
  @IsOptional()
  registers?: Array<Register>;

  @ApiProperty({
    required: false,
    type: () => [Scanned],
  })
  @ValidateNested()
  @Type(() => Scanned)
  @IsOptional()
  scanneds?: Array<Scanned>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { QrCode as QrCode };
