import { IsArray, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginPayloadDto {
    username: string;
    password: string;
}

export class RegisterPayloadDto {
    @IsNotEmpty() @IsString()
    fullName: string;

    @IsNotEmpty() @IsString()
    username: string;

    @IsNotEmpty() @IsEmail()
    email: string;

    @IsNotEmpty() @MinLength(6)
    password: string;

    @IsNotEmpty() @IsString() @MinLength(10)
    phone: string;

    @IsArray()
    address?: string[];
}