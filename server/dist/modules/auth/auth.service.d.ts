import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
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
    }>;
    register(registerPayload: RegisterPayloadDto): Promise<{
        message: string;
    }>;
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByPhone(phone: string): Promise<User | null>;
}
