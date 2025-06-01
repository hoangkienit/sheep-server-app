"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./../user/entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userRepository;
    configService;
    jwtService;
    constructor(userRepository, configService, jwtService) {
        this.userRepository = userRepository;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async login(loginPayload) {
        const { username, password } = loginPayload;
        const user = await this.userRepository.findOne({
            where: { username: username }
        });
        if (!user) {
            throw new common_1.NotFoundException("Invalid credentials");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const { password: _, ...userWithoutPassword } = user;
        const payload = { userId: user.id, username: user.username };
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_ACCESS_SECRET'),
            expiresIn: this.configService.get('JWT_ACCESS_EXPIRES_IN')
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN')
        });
        return {
            message: "Login successful",
            user: userWithoutPassword,
            accessToken: accessToken,
            refreshToken: refreshToken
        };
    }
    async register(registerPayload) {
        const { fullName, username, email, phone, password, address } = registerPayload;
        if (await this.findByUsername(username)) {
            throw new common_1.BadRequestException('Username already exists');
        }
        if (await this.findByEmail(email)) {
            throw new common_1.BadRequestException('Email already exists');
        }
        if (await this.findByPhone(phone)) {
            throw new common_1.BadRequestException('Phone already exists');
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
        };
    }
    async findByUsername(username) {
        return this.userRepository.findOne({ where: { username } });
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async findByPhone(phone) {
        return this.userRepository.findOne({ where: { phone } });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        config_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map