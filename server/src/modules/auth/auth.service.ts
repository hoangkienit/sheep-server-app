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
    login(loginPayload: LoginPayloadDto) {
        const user = fakeUser.find((user) => user.username === loginPayload.username);
        if (!user) {
            return {
                message: "Login failed"
            }
        }

        if (loginPayload.password !== user.password) {
            return {
                message: "Wrong password"
            }
        }
        return {
            message: "Login successful"
        }
    }
}
