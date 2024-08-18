import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enum/role.enum';
import { ROLES_KEY } from '../decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    const hasRole = requiredRoles.some((role) => user.roles?.includes(role));

    if (!hasRole) {
      throw new UnauthorizedException(
        'Access denied. You do not have the required permissions.',
      );
    }

    return true;
  }
}