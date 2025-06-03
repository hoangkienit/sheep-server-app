import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserProfile(userId: number): Promise<{
        message: string;
        user: import("./entities/user.entity").User;
    }>;
}
