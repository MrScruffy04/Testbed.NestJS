import { BadRequestException, Injectable } from '@nestjs/common'

@Injectable()
export class RegistrationService {
  async handle(xmlString: string): Promise<string> {
    if (xmlString.indexOf(':oadrQueryRegistration') !== -1) {
      return this.handleQueryRegistration(xmlString);
    }

    if (xmlString.indexOf(':oadrCreatePartyRegistration') !== -1) {
      return this.handleCreatePartyRegistration(xmlString);
    }

    if (xmlString.indexOf(':oadrCanceledPartyRegistration') !== -1) {
      return this.handleCanceledPartyRegistration(xmlString);
    }

    if (xmlString.indexOf(':oadrCancelPartyRegistration') !== -1) {
      return this.handleCancelPartyRegistration(xmlString);
    }

    throw new BadRequestException('Unrecognized payload')
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN has requested the registration information
   *   Response should be oadrCreatedPartyRegistration
   */
  private async handleQueryRegistration(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrCreatedPartyRegistration ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_123</pyld:requestID></ei:eiResponse><ei:registrationID>REG_2222</ei:registrationID><ei:venID>VEN_123</ei:venID><ei:vtnID>VTN_123</ei:vtnID><oadr:oadrProfiles><oadr:oadrProfile><oadr:oadrProfileName>2.0a</oadr:oadrProfileName><oadr:oadrTransports><oadr:oadrTransport><oadr:oadrTransportName>simpleHttp</oadr:oadrTransportName></oadr:oadrTransport></oadr:oadrTransports></oadr:oadrProfile><oadr:oadrProfile><oadr:oadrProfileName>2.0b</oadr:oadrProfileName><oadr:oadrTransports><oadr:oadrTransport><oadr:oadrTransportName>simpleHttp</oadr:oadrTransportName></oadr:oadrTransport><oadr:oadrTransport><oadr:oadrTransportName>xmpp</oadr:oadrTransportName></oadr:oadrTransport></oadr:oadrTransports></oadr:oadrProfile></oadr:oadrProfiles><oadr:oadrRequestedOadrPollFreq>PT240M</oadr:oadrRequestedOadrPollFreq></oadr:oadrCreatedPartyRegistration></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN has requested to initiate registration
   *   Response should be oadrCreatedPartyRegistration
   * - A PULL or PUSH VEN has made a follow-up request for registration in response to a previously send oadrRequestReregistration
   *   Response should be oadrCreatedPartyRegistration
   */
  private async handleCreatePartyRegistration(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrCreatedPartyRegistration ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_123</pyld:requestID></ei:eiResponse><ei:registrationID>REG_2222</ei:registrationID><ei:venID>VEN_123</ei:venID><ei:vtnID>VTN_123</ei:vtnID><oadr:oadrProfiles><oadr:oadrProfile><oadr:oadrProfileName>2.0a</oadr:oadrProfileName><oadr:oadrTransports><oadr:oadrTransport><oadr:oadrTransportName>simpleHttp</oadr:oadrTransportName></oadr:oadrTransport></oadr:oadrTransports></oadr:oadrProfile><oadr:oadrProfile><oadr:oadrProfileName>2.0b</oadr:oadrProfileName><oadr:oadrTransports><oadr:oadrTransport><oadr:oadrTransportName>simpleHttp</oadr:oadrTransportName></oadr:oadrTransport><oadr:oadrTransport><oadr:oadrTransportName>xmpp</oadr:oadrTransportName></oadr:oadrTransport></oadr:oadrTransports></oadr:oadrProfile></oadr:oadrProfiles><oadr:oadrRequestedOadrPollFreq>PT240M</oadr:oadrRequestedOadrPollFreq></oadr:oadrCreatedPartyRegistration></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL VEN has acknowledged the registration cancellation that we sended with the previous oadrPoll response
   *   Response should be oadrResponse
   */
  private async handleCanceledPartyRegistration(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrResponse ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:venID>VEN_123</ei:venID></oadr:oadrResponse></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN has requested registration cancellation
   *   Response should be oadrCanceledPartyRegistration
   */
  private async handleCancelPartyRegistration(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrCanceledPartyRegistration ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:registrationID>REG_54321</ei:registrationID></oadr:oadrCanceledPartyRegistration></oadr:oadrSignedObject></oadr:oadrPayload>'
  }
}
