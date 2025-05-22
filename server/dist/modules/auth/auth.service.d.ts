import { LoginPayloadDto } from './dto/auth.dto';
export declare class AuthService {
    login(loginPayload: LoginPayloadDto): {
        message: string;
    };
}
