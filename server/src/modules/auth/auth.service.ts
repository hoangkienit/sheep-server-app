import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private configService: ConfigService,
        private jwtService: JwtService
    ) { }
    async login(loginPayload: LoginPayloadDto) {
        const { username, password } = loginPayload;
        const user = await this.userRepository.findOne({
            where: { username: username }
        });

        if (!user) {
            throw new NotFoundException("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
         // Destructure and exclude password
        const { password: _, ...userWithoutPassword } = user;

        const payload = { userId: user.id, username: user.username };

        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
            expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRES_IN')
        });

        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN')
        });
        
        return {
            message: "Login successful",
            user: userWithoutPassword,
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    }

    async register(registerPayload: RegisterPayloadDto) {
        const {
            fullName,
            username,
            email,
            phone,
            password,
            address
        } = registerPayload;

        if (await this.findByUsername(username)) {
            throw new BadRequestException('Username already exists');
        }

        if (await this.findByEmail(email)) {
            throw new BadRequestException('Email already exists');
        }

        if (await this.findByPhone(phone)) {
            throw new BadRequestException('Phone already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            fullName: fullName,
            username: username,
            phone: phone,
            email: email,
            password: hashedPassword,
            address: address
        });

        await this.userRepository.save(newUser);

        return {
            message: "Register success"
        }
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { username } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } });
    }

    async findByPhone(phone: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { phone } });
    }
}
