/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class MessageDto {
  @IsString({message:'The message text need to be a string'})
  @IsNotEmpty({message:'The messege text dont be empty'})
  text: string;
}
