import { BadRequestException, Injectable } from '@nestjs/common'

@Injectable()
export class ReportService {
  async handle(xmlString: string): Promise<string> {
    // VTN reports --> VEN
    if (xmlString.indexOf(':oadrRegisteredReport') !== -1) {
      return this.handleRegisteredReport(xmlString);
    }

    if (xmlString.indexOf(':oadrCreateReport') !== -1) {
      return this.handleCreateReport(xmlString);
    }

    if (xmlString.indexOf(':oadrUpdatedReport') !== -1) {
      return this.handleUpdatedReport(xmlString);
    }
    
    if (xmlString.indexOf(':oadrCancelReport') !== -1) {
      return this.handleCancelReport(xmlString);
    }

    // VEN reports --> VTN
    if (xmlString.indexOf(':oadrRegisterReport') !== -1) {
      return this.handleRegisterReport(xmlString);
    }

    if (xmlString.indexOf(':oadrCreatedReport') !== -1) {
      return this.handleCreatedReport(xmlString);
    }
    
    if (xmlString.indexOf(':oadrUpdateReport') !== -1) {
      return this.handleUpdateReport(xmlString);
    }
    
    if (xmlString.indexOf(':oadrCanceledReport') !== -1) {
      return this.handleCanceledReport(xmlString);
    }

    throw new BadRequestException('Unrecognized payload')
  }

  // VTN reports --> VEN

  /**
   * Triggered when:
   * - A PULL VEN has registered the reports that we sent with the previous oadrPoll response
   *   Response should be one of the following:
   *   - oadrCreatedReport (with oadrReportRequest)
   *   - oadrResponse (without oadrReportRequest)
   */
  private async handleRegisteredReport(xmlString: string): Promise<string> {
    if (xmlString.indexOf(':oadrReportRequest') !== -1) {
      return this.handleCreateReport(xmlString);
    }

    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrResponse ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:venID>VEN_123</ei:venID></oadr:oadrResponse></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN requests a previously registered report or the metadata report
   *   Response should be oadrCreatedReport
   */
  private async handleCreateReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrCreatedReport ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><oadr:oadrPendingReports><ei:reportRequestID>RR_54321</ei:reportRequestID><ei:reportRequestID>RR_09876</ei:reportRequestID></oadr:oadrPendingReports></oadr:oadrCreatedReport></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL VEN acknowledges the report update that we sent with the previous oadrPoll response
   *   Response should be oadrResponse
   */
  private async handleUpdatedReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrResponse ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:venID>VEN_123</ei:venID></oadr:oadrResponse></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN no longer wants a previously requested report
   *   Response should be oadrCanceledReport
   */
  private async handleCancelReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrCanceledReport ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><oadr:oadrPendingReports><ei:reportRequestID>REP_54321</ei:reportRequestID><ei:reportRequestID>REP_09876</ei:reportRequestID></oadr:oadrPendingReports></oadr:oadrCanceledReport></oadr:oadrSignedObject></oadr:oadrPayload>'
  }




  // VEN reports --> VTN

  /**
   * Triggered when:
   * - A PULL or PUSH VEN wants us to register its reports
   *   Response should be oadrRegisteredReport
   */
  private async handleRegisterReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrRegisteredReport ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><oadr:oadrReportRequest><ei:reportRequestID>RR_54321</ei:reportRequestID><ei:reportSpecifier><ei:reportSpecifierID>TELEMTRY_STATUS</ei:reportSpecifierID><xcal:granularity><xcal:duration>PT1M</xcal:duration></xcal:granularity><ei:reportBackDuration><xcal:duration>PT5M</xcal:duration></ei:reportBackDuration><ei:reportInterval><xcal:properties><xcal:dtstart><xcal:date-time>2001-12-17T09:30:47Z</xcal:date-time></xcal:dtstart><xcal:duration><xcal:duration>PT0S</xcal:duration></xcal:duration></xcal:properties></ei:reportInterval><ei:specifierPayload><ei:rID>STATUS</ei:rID><ei:readingType>x-notApplicable</ei:readingType></ei:specifierPayload></ei:reportSpecifier></oadr:oadrReportRequest><oadr:oadrReportRequest><ei:reportRequestID>RR_09876</ei:reportRequestID><ei:reportSpecifier><ei:reportSpecifierID>TELEMTRY_USAGE</ei:reportSpecifierID><xcal:granularity><xcal:duration>PT1M</xcal:duration></xcal:granularity><ei:reportBackDuration><xcal:duration>PT5M</xcal:duration></ei:reportBackDuration><ei:reportInterval><xcal:properties><xcal:dtstart><xcal:date-time>2001-12-17T09:30:47Z</xcal:date-time></xcal:dtstart><xcal:duration><xcal:duration>PT0S</xcal:duration></xcal:duration></xcal:properties></ei:reportInterval><ei:specifierPayload><ei:rID>ENERGY</ei:rID><ei:readingType>x-notApplicable</ei:readingType></ei:specifierPayload><ei:specifierPayload><ei:rID>POWER</ei:rID><ei:readingType>x-notApplicable</ei:readingType></ei:specifierPayload></ei:reportSpecifier></oadr:oadrReportRequest></oadr:oadrRegisteredReport></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN acknowledges the request during registration to send reports
   *   Response should be oadrResponse
   * - A PULL VEN acknowledges the request (sent with the previous oadrPoll) to send a previously registered report
   *   Response should be oadrResponse
   */
  private async handleCreatedReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrResponse ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:venID>VEN_123</ei:venID></oadr:oadrResponse></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL or PUSH VEN sends a report update
   *   Response should be oadrUpdatedReport
   */
  private async handleUpdateReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrUpdatedReport ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><oadr:oadrCancelReport><pyld:requestID>REQ_12345</pyld:requestID><ei:reportRequestID>REP_54321</ei:reportRequestID><pyld:reportToFollow>true</pyld:reportToFollow></oadr:oadrCancelReport></oadr:oadrUpdatedReport></oadr:oadrSignedObject></oadr:oadrPayload>'
  }

  /**
   * Triggered when:
   * - A PULL VEN acknowledges the request (sent with the previous oadrPoll) to cancel a previously requested report
   *   Response should be oadrResponse
   */
  private async handleCanceledReport(xmlString: string): Promise<string> {
    return '<oadr:oadrPayload xmlns:oadr="http://openadr.org/oadr-2.0b/2012/07" xmlns:ei="http://docs.oasis-open.org/ns/energyinterop/201110" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:dsp="http://openadr.org/oadr-2.0b/2012/07/xmldsig-properties" xmlns:dsig11="http://www.w3.org/2009/xmldsig11#" xmlns:clm5ISO42173A="urn:un:unece:uncefact:codelist:standard:5:ISO42173A:2010-04-07" xmlns:pyld="http://docs.oasis-open.org/ns/energyinterop/201110/payloads" xmlns:scale="http://docs.oasis-open.org/ns/emix/2011/06/siscale" xmlns:emix="http://docs.oasis-open.org/ns/emix/2011/06" xmlns:strm="urn:ietf:params:xml:ns:icalendar-2.0:stream" xmlns:xcal="urn:ietf:params:xml:ns:icalendar-2.0" xmlns:power="http://docs.oasis-open.org/ns/emix/2011/06/power" xmlns:gb="http://naesb.org/espi" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml/3.2"><oadr:oadrSignedObject><oadr:oadrResponse ei:schemaVersion="2.0b"><ei:eiResponse><ei:responseCode>200</ei:responseCode><ei:responseDescription>OK</ei:responseDescription><pyld:requestID>REQ_12345</pyld:requestID></ei:eiResponse><ei:venID>VEN_123</ei:venID></oadr:oadrResponse></oadr:oadrSignedObject></oadr:oadrPayload>'
  }
}
