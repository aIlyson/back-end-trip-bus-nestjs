import { Role } from "../enum/role.enum";
import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";


export function Auth(...roles:Role[]){
    return applyDecorators(
        SetMetadata('roles',roles),
        UseGuards(AuthGuard,RolesGuard)
    )
}