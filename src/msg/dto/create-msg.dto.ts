import { IsString } from "class-validator";

export class CreateMsgDto{
    @IsString()
    content: string
}