import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class  UserSignUp{
    @IsNotEmpty({message:'Name can not be null'})
    @IsString({message:'Name should be a string'})
    name:string;

    @IsNotEmpty({message:'Email can not be null'})
    @IsEmail({},{message: 'Invalid email address'})
    email:string;

    @IsNotEmpty({message:'Password can not be null'})
    @MinLength(5,{message : 'Minimum Length is 5'})
    password:string;
}