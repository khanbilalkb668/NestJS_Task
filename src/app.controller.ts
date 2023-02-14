import { Controller, Get } from '@nestjs/common';
import { Post, Req } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
    // return {name:'bilal',email:'khanbilalkb668@gmail.com'};
  }
  
  @Post('khan')
  store(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }

  @Get('download')
  generatePublicUrl() {
    return this.appService.generatePublicUrl();
    // return {name:'bilal',email:'khanbilalkb668@gmail.com'};
  }
  @Post('list')
  File_in_directory(): any {
    return this.appService.listFiles();
  }
  @Get('upload')
  uploadFile(){
    return this.appService. uploadFile();
    // return {name:'bilal',email:'khanbilalkb668@gmail.com'};
  }


  
}
