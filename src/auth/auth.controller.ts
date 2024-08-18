import { Controller, HttpCode, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInResponseAuthDto } from './dto/sigIn-response-auth.dto';
import { SignInAuthDto } from './dto/sigIn-auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInAuthDto: SignInAuthDto,
    ): Promise<SignInResponseAuthDto> {
        return this.authService.signIn(signInAuthDto);
    }
}
