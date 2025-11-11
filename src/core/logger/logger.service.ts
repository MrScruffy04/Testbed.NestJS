import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as fsPromises from 'fs/promises'

enum Phase {
  REQUEST = 'request',
  RESPONSE = 'response',
}

@Injectable()
export class LoggerService {
  constructor(private readonly config: ConfigService) { }

  async logRequest (now: number, requestId: string, body: string): Promise<void> {
    await this.writeFile(now, requestId, Phase.REQUEST, body)
  }

  async logResponse (now: number, requestId: string, body: string): Promise<void> {
    await this.writeFile(now, requestId, Phase.RESPONSE, body)
  }

  private async writeFile (now: number, requestId: string, phase: Phase, body: string): Promise<void> {
    const dir = this.getLogDir()
    const filename = this.getFilename(now, requestId, phase)

    await fsPromises.mkdir(dir, { recursive: true })
    await fsPromises.writeFile(`${dir}/${filename}`, body)
  }

  private getLogDir (): string {
    const defaultLogDir = './log'
    return this.config.get<string>('LOG_DIR', defaultLogDir)
  }

  private getTimestamp (now: number): string {
    return new Date(now).toISOString()
  }

  private getFilename (now: number, requestId: string, phase: Phase): string {
    return `${this.getTimestamp(now)}_${requestId}_${phase}.xml`
  }
}
