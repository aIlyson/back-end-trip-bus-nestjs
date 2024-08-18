import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { access } from 'fs';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (!user || bcrypt.compareSync(pass, user.password)) {
            throw new UnauthorizedException();
        }

        const payload = {
            sub: user.id,
            username: user.name,
            roles: user.roles
        }

        return { access_token: await this.jwtService.signAsync(payload) }
    }
}
