import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { GeneticRandomizerService } from '../evolution/services/geneticRandomizer.service';

@Injectable()
export class DiagnosticInterceptor implements NestInterceptor {
  constructor(private readonly geneticRandomizer: GeneticRandomizerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        response.header('X-FakeSeed', this.geneticRandomizer.fakeSeed);
        return data;
      }),
    );
  }
}
