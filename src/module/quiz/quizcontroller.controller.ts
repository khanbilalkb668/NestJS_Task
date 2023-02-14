import { Controller, Get, Req } from '@nestjs/common';
import { Body, Param, Patch, Post } from '@nestjs/common/decorators';
import { AuthService } from './quiz.service';
import { userUpdateDto } from 'src/Dto/user-update.dto';

@Controller('quiz')
export class QuizcontrollerController {

constructor(private quizservice:AuthService) {}
 @Get('/')
 getAllQuiz(){

    return [1,2,3];
 }
@Post('signup')
signup(){
return this.quizservice.bilal();
}   

@Post('signin')
signin(){
return "i am signed in bilal bhai";
}   
@Post('khan')
store(@Body() body: any){
return this.quizservice.create(body);
}   

@Patch('pathan')
update(
@Body() updateUserDto: userUpdateDto,
@Param() Param:{  userid :number},)
{
    return this.quizservice.update(updateUserDto,Param)
}





}




