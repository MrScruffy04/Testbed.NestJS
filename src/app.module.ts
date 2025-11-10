import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { configValidationSchema } from './core/config/config.schema'
import { OpenAdrModule } from './modules/openadr/openadr.module'

@Module({
  imports: [
    OpenAdrModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
