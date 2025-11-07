import { FastifyBodyParser, FastifyInstance, FastifyRequest } from 'fastify'

const xmlContentTypeParser: FastifyBodyParser<string | Buffer> = async (
  _request: FastifyRequest, 
  rawBody: string | Buffer,
): Promise<string | undefined> => {
  const bodyStr = rawBody.toString()
  console.log(bodyStr)
  return bodyStr
}

export const XmlContentTypeParserParams: Parameters<FastifyInstance['addContentTypeParser']> = [
  ['application/xml', 'text/xml'],
  { parseAs: 'string' },
  xmlContentTypeParser,
]
