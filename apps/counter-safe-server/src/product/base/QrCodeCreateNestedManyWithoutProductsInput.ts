/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QrCodeWhereUniqueInput } from "../../qrCode/base/QrCodeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QrCodeCreateNestedManyWithoutProductsInput {
  @Field(() => [QrCodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QrCodeWhereUniqueInput],
  })
  connect?: Array<QrCodeWhereUniqueInput>;
}

export { QrCodeCreateNestedManyWithoutProductsInput as QrCodeCreateNestedManyWithoutProductsInput };
