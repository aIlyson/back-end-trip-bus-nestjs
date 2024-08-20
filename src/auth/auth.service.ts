import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import {compareSync} from 'bcrypt';
import { SignInResponseAuthDto } from './dto/sigIn-response-auth.dto';
import { SignInAuthDto } from './dto/sigIn-auth.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(signInAuthDto:SignInAuthDto): Promise<SignInResponseAuthDto> {
        const user = await this.userService.findOne({email:signInAuthDto.email});

        if (!user || !compareSync(signInAuthDto.password, user.password)) {
            throw new UnauthorizedException('Invalid email or password.')
        }

        const payload = {
            sub: user.id,
            username: user.name,
            role: user.role
        }

        return { access_token: await this.jwtService.signAsync(payload) }
    }
}
