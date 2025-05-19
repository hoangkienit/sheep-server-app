import { Injectable } from '@nestjs/common';
import { LoginPayloadDto } from './dto/auth.dto';

const fakeUser = [
    {
        id: 1,
        username: "hoangkien",
        password: "123"
    },
    {
        id: 2,
        username: "kienhoang",
        password: "321"
    }
]
@Injectable()
export class AuthService {
    login({ username, password }: LoginPayloadDto) {
        const findUser = fakeUser.find(us => us.username === username);
        if (!findUser) return null;

        return {
            message: "Login successful"
        }
    }
}
