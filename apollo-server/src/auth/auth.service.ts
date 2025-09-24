import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(user: { id: string; role: string }, res: Response) {
    const token = this.jwtService.sign(user, { expiresIn: '1h' });

    res.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 1000 * 60 * 15,
    });

    return { success: true };
  }

  verify(req: Request) {
    const token = req.cookies['access_token'];
    if (!token) return null;
    try {
      return this.jwtService.verify(token);
    } catch {
      return null;
    }
  }
}
