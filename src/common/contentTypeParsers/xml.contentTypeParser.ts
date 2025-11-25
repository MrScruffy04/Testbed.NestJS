import { FastifyBodyParser, FastifyInstance, FastifyRequest } from 'fastify';
import { CatParams, DogParams } from './types';
import { XmlPetParserService } from './xmlPetParser.service';

const xmlPetParserService: XmlPetParserService = new XmlPetParserService();

const xmlContentTypeParser: FastifyBodyParser<string | Buffer> = async (
  _request: FastifyRequest,
  rawBody: string | Buffer,
): Promise<CatParams | DogParams | undefined> => {
  return xmlPetParserService.parsePet(rawBody.toString());
};

export const XmlContentTypeParserParams: Parameters<
  FastifyInstance['addContentTypeParser']
> = [
  ['application/xml', 'text/xml'],
  { parseAs: 'string' },
  xmlContentTypeParser,
];
