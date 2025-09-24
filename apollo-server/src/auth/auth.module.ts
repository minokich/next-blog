import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    JwtModule.register({
      secret: 'supersecret',
      signOptions: { expiresIn: '15m' }, // 短命アクセストークン
    }),
  ],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
