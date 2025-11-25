import { Document, Element, parseXmlString } from 'libxmljs2';
import { CatParams, DogParams } from './types';

export class XmlPetParserService {
  parsePet(xmlString: string): CatParams | DogParams | undefined {
    const xml: Document = parseXmlString(xmlString);

    const rootName = xml.root()?.name();

    if (rootName === 'cat') {
      return this.parseCat(xml);
    } else if (rootName === 'dog') {
      return this.parseDog(xml);
    }

    return undefined;
  }

  private parseCat(xml: Document): CatParams | undefined {
    const name = xml.get<Element>('/cat/name')?.text();
    const ageString = xml.get<Element>('/cat/age')?.text();
    const age = ageString !== undefined ? parseInt(ageString, 10) : Number.NaN;

    if (name !== undefined && name !== '' && !Number.isNaN(age)) {
      return { name, age };
    }

    return undefined;
  }

  private parseDog(xml: Document): DogParams | undefined {
    const name = xml.get<Element>('/dog/name')?.text();
    const ageString = xml.get<Element>('/dog/age')?.text();
    const age = ageString !== undefined ? parseInt(ageString, 10) : Number.NaN;

    if (name !== undefined && name !== '' && !Number.isNaN(age)) {
      return { name, age };
    }

    return undefined;
  }
}
