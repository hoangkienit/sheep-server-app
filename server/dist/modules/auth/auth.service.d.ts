import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private configService;
    private jwtService;
    constructor(userRepository: Repository<User>, configService: ConfigService, jwtService: JwtService);
    login(loginPayload: LoginPayloadDto): Promise<{
        message: string;
        user: {
            id: number;
            fullName: string;
            username: string;
            phone: string;
            email: string;
            isActive: boolean;
            addresses: import("../user/entities/address.entity").Address[];
        };
        accessToken: string;
        refreshToken: string;
    }>;
    register(registerPayload: RegisterPayloadDto): Promise<{
        message: string;
    }>;
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByPhone(phone: string): Promise<User | null>;
}
