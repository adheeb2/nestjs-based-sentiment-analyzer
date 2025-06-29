import { Controller, Query, Get, Post, Body } from '@nestjs/common';
import { SentimentService } from './sentiment.service';

@Controller('sentiment')
export class SentimentController {
  constructor(private readonly sentimentService: SentimentService) {}

  @Get()
  async getRequest(@Query('text') text: string) {
    return await this.sentimentService.analyze(text);
  }
  @Post()
  async postRequest(@Body('text') text: string) {
    return await this.sentimentService.analyze(text);
  }
}
