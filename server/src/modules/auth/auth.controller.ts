import { Body, Controller, Post } from '@nestjs/common';
import { LoginPayloadDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    @Post('login')
    login(@Body loginPayload: LoginPayloadDto) {
        
    }
}
