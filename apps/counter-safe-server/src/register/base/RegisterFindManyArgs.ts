/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RegisterWhereInput } from "./RegisterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RegisterOrderByInput } from "./RegisterOrderByInput";

@ArgsType()
class RegisterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RegisterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RegisterWhereInput, { nullable: true })
  @Type(() => RegisterWhereInput)
  where?: RegisterWhereInput;

  @ApiProperty({
    required: false,
    type: [RegisterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RegisterOrderByInput], { nullable: true })
  @Type(() => RegisterOrderByInput)
  orderBy?: Array<RegisterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RegisterFindManyArgs as RegisterFindManyArgs };
