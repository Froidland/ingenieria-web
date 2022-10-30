import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto';
import { SignInDto } from './dto/signing.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: SignUpDto) {
    return this.authService.singup(dto);
  }

  @Post('signin')
  signin(@Body() dto: SignInDto) {
    return this.authService.signin(dto);
  }
}
