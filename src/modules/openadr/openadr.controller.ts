import { Body, Controller, Header, HttpCode, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { OptService } from './opt.service';
import { PollService } from './poll.service';
import { RegistrationService } from './registration.service';
import { ReportService } from './report.service';

@Controller('/OpenADR2/Simple/2.0b')
export class OpenAdrController {
  constructor(
    private readonly eventService: EventService,
    private readonly optService: OptService,
    private readonly pollService: PollService,
    private readonly registrationService: RegistrationService,
    private readonly reportService: ReportService,
  ) {}

  @Post('/OadrPoll')
  @HttpCode(200)
  @Header('Content-Type', 'application/xml')
  async handlePoll(@Body() xmlString: string): Promise<string> {
    return this.pollService.handle(xmlString);
  }

  @Post('/EiRegisterParty')
  @HttpCode(200)
  @Header('Content-Type', 'application/xml')
  async handleRegistration(@Body() xmlString: string): Promise<string> {
    return this.registrationService.handle(xmlString);
  }

  @Post('/EiEvent')
  @HttpCode(200)
  @Header('Content-Type', 'application/xml')
  async handleEvent(@Body() xmlString: string): Promise<string> {
    return this.eventService.handle(xmlString);
  }

  @Post('/EiReport')
  @HttpCode(200)
  @Header('Content-Type', 'application/xml')
  async handleReport(@Body() xmlString: string): Promise<string> {
    return this.reportService.handle(xmlString);
  }

  @Post('/EiOpt')
  @HttpCode(200)
  @Header('Content-Type', 'application/xml')
  async handleOpt(@Body() xmlString: string): Promise<string> {
    return this.optService.handle(xmlString);
  }
}
