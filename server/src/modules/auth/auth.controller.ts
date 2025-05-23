import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

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
            success: true,
            message: response.message,
            data: {
                user: response.user
            }
        }
    }

    @Post('register')
    async register(@Body() registerPayload: RegisterPayloadDto) {
        const response = await this.authService.register(registerPayload);

        return {
            success: true,
            message: response.message
        }
    }
}
