import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SentimentModule } from './modules/sentiment/sentiment.module';

@Module({
  imports: [SentimentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
