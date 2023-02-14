import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './module/quiz/quiz.module';
import { QuizcontrollerController } from './module/quiz/quizcontroller.controller';
// import { AuthService} from './module/quiz/quiz.service.ts';
// import { QuizModule } from './module/quiz/quiz.module';
// import { QuizModule } from './module/quiz/quiz.module';

@Module({
  imports:[QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
