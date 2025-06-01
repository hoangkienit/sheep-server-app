import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { access } from 'fs';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        console.log(id);
        return `This action returns a #${id} cat`;
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginPayload: LoginPayloadDto) {
        const response = await this.authService.login(loginPayload);
        return {
            message: response.message,
            user: response.user,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
        }
    }

    @Post('register')
    @HttpCode(201)
    async register(@Body() registerPayload: RegisterPayloadDto) {
        const response = await this.authService.register(registerPayload);

        return {
            message: response.message
        }
    }
}
