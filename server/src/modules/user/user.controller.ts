import { Controller, Get, HttpCode, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }
    
    @UseGuards(AuthGuard('jwt'))
    @Get('/hello')
    @HttpCode(200)
    async getUser(@Req() req) {
        console.log("Call api from: ", req.user)
        const response = await this.userService.getUser();

        return {
            message: response.message
        }
    }
}
