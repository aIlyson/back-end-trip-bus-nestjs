import { ExecutionContext,createParamDecorator } from "@nestjs/common"

export const User = createParamDecorator((data:string,ctx:ExecutionContext)=> {
  const req =  ctx.switchToHttp().getRequest()
  const user = req.user
  return data ? user?.[data] : user
})