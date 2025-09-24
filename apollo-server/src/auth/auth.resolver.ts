// src/auth/auth.resolver.ts
import {
  Resolver,
  Mutation,
  Args,
  Context,
  Query,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AdminData } from './models/admin-data.model';
import { Notification } from './models/notification.model';

@ObjectType()
export class AuthResponse {
  @Field()
  success!: boolean;

  @Field({ nullable: true })
  message?: string; // nullable + optional
}

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() context: { req: Request; res: Response },
  ): Promise<AuthResponse> {
    if (email === 'admin@test.com' && password === 'pass') {
      this.authService.login({ id: '1', role: 'ADMIN' }, context.res);
      return { success: true };
    }
    throw new Error('Invalid credentials');
  }

  @Mutation(() => AuthResponse)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Context() context: { req: Request; res: Response },
  ): Promise<AuthResponse> {
    try {
      const newUser = { id: '2', role: 'USER', email, name };
      this.authService.login(newUser, context.res);
      return { success: true };
    } catch (err) {
      return { success: false, message: (err as Error).message };
    }
  }

  @Query(() => String)
  async me(
    @Context() context: { req: Request; res: Response },
  ): Promise<string> {
    const user = this.authService.verify(context.req);
    if (!user) throw new Error('Not authenticated');
    return `Hello ${user.role}`;
  }

  @Query(() => AdminData)
  async adminData(
    @Context() context: { req: Request; res: Response },
  ): Promise<AdminData> {
    const user = this.authService.verify(context.req);
    if (!user || user.role !== 'ADMIN') {
      throw new Error('Forbidden: ADMIN role required');
    }

    return {
      systemLogs: ['log1', 'log2'],
      secretStats: 'admin-only-metrics',
    };
  }

  @Query(() => [Notification])
  async myNotifications(
    @Context() context: { req: Request; res: Response },
  ): Promise<Notification[]> {
    const user = this.authService.verify(context.req);
    if (!user) throw new Error('Not authenticated');

    return [
      {
        id: '1',
        message: '通知メッセージ1',
        read: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        message: '通知メッセージ2',
        read: true,
        createdAt: new Date().toISOString(),
      },
    ];
  }

  @Mutation(() => Notification)
  async markNotificationAsRead(
    @Args('id') id: string,
    @Context() context: { req: Request; res: Response },
  ): Promise<Notification> {
    const user = this.authService.verify(context.req);
    if (!user) throw new Error('Not authenticated');

    return {
      id,
      message: `通知 ${id}`,
      read: true,
      createdAt: new Date().toISOString(),
    };
  }
}
