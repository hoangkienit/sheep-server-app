import { Controller, Get, HttpCode, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }
    
    // @UseGuards(AuthGuard('jwt'))
    @Get('/profile/:userId')
    @HttpCode(200)
    async getUserProfile(@Param('userId') userId: number) {
        const response = await this.userService.getUserProfile(userId);

        return {
            message: "Get user profile success",
            user: response
        }
    }
}
