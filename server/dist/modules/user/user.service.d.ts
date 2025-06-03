import { Repository } from 'typeorm';
import { User } from './../user/entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getUserProfile(userId: number): Promise<User>;
}
