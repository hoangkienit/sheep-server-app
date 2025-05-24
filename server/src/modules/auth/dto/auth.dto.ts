import { IsArray, IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginPayloadDto {
    @IsNotEmpty()
    @IsString()
    @Matches(/\S/, { message: 'Username must not be empty or whitespace' })
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: "Password must at least 6 characters"})
    @MaxLength(20, { message: "Password must max length is 20 characters"})
    password: string;
}

export class RegisterPayloadDto {
    @IsNotEmpty()
    @IsString()
    @Matches(/\S/, { message: 'Full name must not be empty or whitespace' })
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/\S/, { message: 'Username must not be empty or whitespace' })
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    phone: string;

    @IsArray()
    address?: string[];
}