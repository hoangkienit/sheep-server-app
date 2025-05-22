import { LoginPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    findOne(id: string): string;
    login(loginPayload: LoginPayloadDto): {
        message: string;
    };
    register(): void;
}
