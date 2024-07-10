import * as graphql from "@nestjs/graphql";
import { UserRegisterInput } from "../auth/UserRegisterInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => UserRegisterInput)
  async Login(
    @graphql.Args()
    args: UserRegisterInput
  ): Promise<UserRegisterInput> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => UserRegisterInput)
  async Register(
    @graphql.Args()
    args: UserRegisterInput
  ): Promise<UserRegisterInput> {
    return this.service.Register(args);
  }
}
