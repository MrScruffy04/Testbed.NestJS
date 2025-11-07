import { Body, Controller, Header, Param, Post } from '@nestjs/common'
import { EventService } from './event.service'
import { OptService } from './opt.service'
import { PollService } from './poll.service'
import { RegistrationService } from './registration.service'
import { ReportService } from './report.service'

@Controller('/vtn/:vtnId/OpenADR2/Simple/2.0b')
export class OpenAdrController {
  constructor(
    private readonly eventService: EventService,
    private readonly optService: OptService,
    private readonly pollService: PollService,
    private readonly registrationService: RegistrationService,
    private readonly reportService: ReportService,
  ) {}

  @Post('/OadrPoll')
  @Header('Content-Type', 'application/xml')
  async handlePoll(@Param('vtnId') _vtnId: string, @Body() xmlString: string): Promise<string> {
    return this.pollService.handle(xmlString);
  }

  @Post('/EiRegisterParty')
  @Header('Content-Type', 'application/xml')
  async handleRegistration(@Param('vtnId') _vtnId: string, @Body() xmlString: string): Promise<string> {
    return this.registrationService.handle(xmlString);
  }

  @Post('/EiEvent')
  @Header('Content-Type', 'application/xml')
  async handleEvent(@Param('vtnId') _vtnId: string, @Body() xmlString: string): Promise<string> {
    return this.eventService.handle(xmlString);
  }

  @Post('/EiReport')
  @Header('Content-Type', 'application/xml')
  async handleReport(@Param('vtnId') _vtnId: string, @Body() xmlString: string): Promise<string> {
    return this.reportService.handle(xmlString);
  }

  @Post('/EiOpt')
  @Header('Content-Type', 'application/xml')
  async handleOpt(@Param('vtnId') _vtnId: string, @Body() xmlString: string): Promise<string> {
    return this.optService.handle(xmlString);
  }
}
