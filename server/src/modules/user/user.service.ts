import { Injectable, NotFoundException } from '@nestjs/common';
import { UserProfileResponseDto } from './dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

    ) { }
    
    async getUserProfile(userId: number): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id: userId }
        });

        if (!user) throw new NotFoundException("User not found");
        user.password = '';

        return user;
    }
}
