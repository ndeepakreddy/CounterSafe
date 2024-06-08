/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScannedWhereUniqueInput } from "../../scanned/base/ScannedWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ScannedUpdateManyWithoutQrCodesInput {
  @Field(() => [ScannedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScannedWhereUniqueInput],
  })
  connect?: Array<ScannedWhereUniqueInput>;

  @Field(() => [ScannedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScannedWhereUniqueInput],
  })
  disconnect?: Array<ScannedWhereUniqueInput>;

  @Field(() => [ScannedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScannedWhereUniqueInput],
  })
  set?: Array<ScannedWhereUniqueInput>;
}

export { ScannedUpdateManyWithoutQrCodesInput as ScannedUpdateManyWithoutQrCodesInput };