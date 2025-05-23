import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    findOne(id: string): string;
    login(loginPayload: LoginPayloadDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: import("../user/entities/user.entity").User;
        };
    }>;
    register(registerPayload: RegisterPayloadDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
