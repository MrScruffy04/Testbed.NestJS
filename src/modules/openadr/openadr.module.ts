import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { OpenAdrController } from './openadr.controller';
import { OptService } from './opt.service';
import { PollService } from './poll.service';
import { RegistrationService } from './registration.service';
import { ReportService } from './report.service';

@Module({
  imports: [],
  controllers: [OpenAdrController],
  providers: [
    EventService,
    OptService,
    PollService,
    RegistrationService,
    ReportService,
  ],
})
export class OpenAdrModule {}
