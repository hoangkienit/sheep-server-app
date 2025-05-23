import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginPayloadDto, RegisterPayloadDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }
    async login(loginPayload: LoginPayloadDto) {
        const user = await this.userRepository.findOne({
            where: { username: loginPayload.username }
        });

        if (!user) {
            throw new NotFoundException("User not found")
        }

        if (user.password !== loginPayload.password) {
            throw new BadRequestException("Wrong password")
        }
        return {
            message: "Login successful",
            user: user
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
