import { Module } from '@nestjs/common';
import { QuizcontrollerController } from './quizcontroller.controller';
import { AuthService } from './quiz.service';

@Module({

controllers:[QuizcontrollerController ],
providers: [AuthService],

})
export class QuizModule {}
