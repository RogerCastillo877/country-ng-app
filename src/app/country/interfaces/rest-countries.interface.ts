export type RESTCountry = {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    demonyms:     Demonyms;
    cca3:         string;
    translations: { [key: string]: Translation };
    flag:         string;
    maps:         Maps;
    population:   number;
    gini:         Gini;
    fifa:         string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    postalCode:   PostalCode;
}

export type CapitalInfo = {
    latlng: number[];
}

export type Car = {
    signs: string[];
    side:  string;
}

export type CoatOfArms = {
    png: string;
    svg: string;
}

export type Currencies = {
    COP: Cop;
}

export type Cop = {
    symbol: string;
    name:   string;
}

export type Demonyms = {
    eng: Eng;
    fra: Eng;
}

export type Eng = {
    f: string;
    m: string;
}

export type Flags = {
    png: string;
    svg: string;
    alt: string;
}

export type Gini = {
    "2019": number;
}

export type Idd = {
    root:     string;
    suffixes: string[];
}

export type Languages = {
    spa: string;
}

export type Maps = {
    googleMaps:     string;
    openStreetMaps: string;
}

export type Name = {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export type NativeName = {
    spa: Translation;
}

export type Translation = {
    official: string;
    common:   string;
}

export type PostalCode = {
    format: null;
    regex:  null;
}
