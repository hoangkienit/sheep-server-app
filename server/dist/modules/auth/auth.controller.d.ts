import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    findOne(id: string): string;
    login(loginPayload: LoginPayloadDto): Promise<{
        message: string;
        user: {
            id: number;
            fullName: string;
            username: string;
            phone: string;
            email: string;
            isActive: boolean;
            address: string[];
        };
        accessToken: string;
        refreshToken: string;
    }>;
    register(registerPayload: RegisterPayloadDto): Promise<{
        message: string;
    }>;
}
