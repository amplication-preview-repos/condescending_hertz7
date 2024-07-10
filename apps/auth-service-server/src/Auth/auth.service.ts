import { Injectable } from "@nestjs/common";
import { UserRegisterInput } from "../auth/UserRegisterInput";

@Injectable()
export class AuthService {
  constructor() {}
  async Login(args: UserRegisterInput): Promise<UserRegisterInput> {
    throw new Error("Not implemented");
  }
  async Register(args: UserRegisterInput): Promise<UserRegisterInput> {
    throw new Error("Not implemented");
  }
}
