import { Module } from '@nestjs/common'
import { OpenAdrModule } from './modules/openadr/openadr.module'

@Module({
  imports: [OpenAdrModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
