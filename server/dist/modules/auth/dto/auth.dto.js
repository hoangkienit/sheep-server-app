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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPayloadDto = exports.LoginPayloadDto = void 0;
const class_validator_1 = require("class-validator");
class LoginPayloadDto {
    username;
    password;
}
exports.LoginPayloadDto = LoginPayloadDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: 'Username must not be empty or whitespace' }),
    __metadata("design:type", String)
], LoginPayloadDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: "Password must at least 6 characters" }),
    (0, class_validator_1.MaxLength)(20, { message: "Password must max length is 20 characters" }),
    __metadata("design:type", String)
], LoginPayloadDto.prototype, "password", void 0);
class RegisterPayloadDto {
    fullName;
    username;
    email;
    password;
    phone;
}
exports.RegisterPayloadDto = RegisterPayloadDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: 'Full name must not be empty or whitespace' }),
    __metadata("design:type", String)
], RegisterPayloadDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: 'Username must not be empty or whitespace' }),
    __metadata("design:type", String)
], RegisterPayloadDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterPayloadDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], RegisterPayloadDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], RegisterPayloadDto.prototype, "phone", void 0);
//# sourceMappingURL=auth.dto.js.map