import { LoginPayloadDto } from './dto/auth.dto';
export declare class AuthService {
    login({ username, password }: LoginPayloadDto): {
        message: string;
    } | null;
}
