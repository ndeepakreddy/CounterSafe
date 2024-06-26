/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RegisterWhereUniqueInput } from "../../register/base/RegisterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RegisterUpdateManyWithoutQrCodesInput {
  @Field(() => [RegisterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RegisterWhereUniqueInput],
  })
  connect?: Array<RegisterWhereUniqueInput>;

  @Field(() => [RegisterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RegisterWhereUniqueInput],
  })
  disconnect?: Array<RegisterWhereUniqueInput>;

  @Field(() => [RegisterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RegisterWhereUniqueInput],
  })
  set?: Array<RegisterWhereUniqueInput>;
}

export { RegisterUpdateManyWithoutQrCodesInput as RegisterUpdateManyWithoutQrCodesInput };
