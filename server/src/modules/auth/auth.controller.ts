import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginPayloadDto } from './dto/auth.dto';
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
    login(@Body() loginPayload: LoginPayloadDto) {
        return this.authService.login(loginPayload);
    }

    @Post('register')
    register() {

    }
}
