import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor<string, string> {
  constructor(private readonly loggerService: LoggerService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<string>> {
    const now = Date.now();
    const request: FastifyRequest = context.switchToHttp().getRequest();

    await this.loggerService.logRequest(
      now,
      request.id,
      request.body as string,
    );

    return next.handle().pipe(
      tap((response: string) => {
        void this.loggerService.logResponse(now, request.id, response);
      }),
    );
  }
}
