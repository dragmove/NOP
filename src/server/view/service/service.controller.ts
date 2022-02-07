import { Controller, Get, Render } from "@nestjs/common";

@Controller("service")
export class ServiceController {
  constructor() {}

  @Get()
  @Render("service")
  public index() {}
}
