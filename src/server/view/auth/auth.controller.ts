import { Controller, Get, Render } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor() {}

  @Get()
  @Render("auth")
  public index() {}
}
