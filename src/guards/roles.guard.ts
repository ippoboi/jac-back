import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles, ROLES_KEY } from 'src/decorators/roles.decorator';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    const request = context.switchToHttp().getRequest();

    console.log('roles', requiredRoles);

    if (request?.user) {
      const { id } = request.user;
      const user = await this.userService.findOne(id);
      return requiredRoles.some((role) =>
        user.role.some((e) => e.roleLabel === role),
      );
    }

    return false;
  }
}
