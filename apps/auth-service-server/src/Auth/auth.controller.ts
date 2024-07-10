import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { UserRegisterInput } from "../auth/UserRegisterInput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: UserRegisterInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: UserRegisterInput
  ): Promise<UserRegisterInput> {
        return this.service.Login(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: UserRegisterInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Register(
    @common.Body()
    body: UserRegisterInput
  ): Promise<UserRegisterInput> {
        return this.service.Register(body);
      }
}
