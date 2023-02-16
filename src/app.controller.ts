import { Body, Controller, Get } from '@nestjs/common';
import { Post, Req } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { Request } from 'express';
import {userUpdateDto} from './Dto/user-update.dto'

import {userUpdateDtoss} from './Dto/user-update.dto'

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

  @Post('make_folder')
  create_folder(@Body() mfk:userUpdateDto): any {
    return this.appService.createFolder(mfk.name);
  }

  @Post('folder_search')
  search_folder(@Body() fk:userUpdateDto): any {
    return this.appService.searchFolder(fk.name);
  }

  @Post('generate')
  Generate_Url(@Body() fk1:userUpdateDtoss):any {
    return this.appService.generatePublicUrls(fk1.id);
  }
  
}
