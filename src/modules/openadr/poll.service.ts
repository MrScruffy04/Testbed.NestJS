import { BadRequestException, Injectable } from '@nestjs/common'

@Injectable()
export class PollService {
  async handle(xmlString: string): Promise<string> {
    if (xmlString.indexOf(':oadrPoll') !== -1) {
      return this.handlePoll(xmlString);
    }

    throw new BadRequestException('Unrecognized payload')
  }

  /**
   * Triggered when:
   * - A PULL VEN has sent an oadrPoll request to the VTN
   *   Response should be one of the following:
   *   - oadrDistributeEvent
   *   - oadrRegisterReport
   *   - oadrCreateReport
   *   - oadrCancelReport
   *   - oadrUpdateReport
   *   - oadrRequestReregistration
   *   - oadrCancelPartyRegistration
   *   - oadrResponse
   */
  private async handlePoll(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrResponse ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:venID>VEN_123</ei:venID></oadr:oadrResponse></oadr:oadrSignedObject></oadr:oadrPayload>'
  }
}
