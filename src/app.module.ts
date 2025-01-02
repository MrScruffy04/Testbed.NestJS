import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolymorphismModule } from './polymorphism/polymorphism.module';

@Module({
  imports: [PolymorphismModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
