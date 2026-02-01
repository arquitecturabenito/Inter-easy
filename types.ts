export enum Language {
  DE = 'Deutsch',
  EN = 'English',
  FR = 'Français',
  ES = 'Español',
  IT = 'Italiano',
  PT = 'Português',
}

export interface ContentStrings {
  welcome: string;
  welcomeConnector: string;
  est: string;
  tagline: string;
  enter: string;
  contactHeader: string;
  productsHeader: string;
  viewProducts: string;
  sectionFresh: string;
  sectionFrozen: string;
  address: string;
  phone: string;
  email: string;
  freshnessGuaranteed: string;
  heroDescription: string;
  hq: string;
  getInTouch: string;
  rightsReserved: string;
  moreVariety: string;
  productNames: {
    redPepper: string;
    greenPepper: string;
    yellowPepper: string;
    orangePepper: string;
    eggplant: string;
    zucchini: string;
    onion: string;
    potato: string;
    tomato: string;
    broccoli: string;
    cauliflower: string;
    cucumber: string;
    celery: string;
    sweetPotato: string;
    pumpkin: string;
    artichoke: string;
    leek: string;
    fennel: string;
    carrot: string;
    romanesco: string;
    chard: string;
    lettuce: string;
  };
}

export type Translations = Record<Language, ContentStrings>;