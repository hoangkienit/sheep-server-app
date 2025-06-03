
import { ApiProperty } from '@nestjs/swagger';

export class UserProfileResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    fullName: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty({ type: [String] })
    address: string[];
}
