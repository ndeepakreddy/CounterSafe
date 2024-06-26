/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RegisterWhereInput } from "./RegisterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RegisterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RegisterWhereInput,
  })
  @ValidateNested()
  @Type(() => RegisterWhereInput)
  @IsOptional()
  @Field(() => RegisterWhereInput, {
    nullable: true,
  })
  every?: RegisterWhereInput;

  @ApiProperty({
    required: false,
    type: () => RegisterWhereInput,
  })
  @ValidateNested()
  @Type(() => RegisterWhereInput)
  @IsOptional()
  @Field(() => RegisterWhereInput, {
    nullable: true,
  })
  some?: RegisterWhereInput;

  @ApiProperty({
    required: false,
    type: () => RegisterWhereInput,
  })
  @ValidateNested()
  @Type(() => RegisterWhereInput)
  @IsOptional()
  @Field(() => RegisterWhereInput, {
    nullable: true,
  })
  none?: RegisterWhereInput;
}
export { RegisterListRelationFilter as RegisterListRelationFilter };
