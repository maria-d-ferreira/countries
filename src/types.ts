export type CountryFlag = {
  png: string;
  svg: string;
};

export interface ICountry {
  countryCode: string;
  name: string;
  capital: string;
  region: string;
  flags: CountryFlag;
  population: number;
  borders: string[];
  languages: any;
  currencies: any;
}

export interface IFavorite extends ICountry {
  favorite: boolean;
}

export type CountryState = {
  countries: ICountry[];
};

export type FavoriteState = {
  favorites: ICountry[];
};

export type RegionState = {
  regions: string;
};

export type CountryAction = {
  type: string;
  country: ICountry;
};

export type FavoriteAction = {
  type: string;
  favorite: IFavorite;
};

export type RegionAction = {
  type: string;
  region: string;
};

export type DispatchType = (args: CountryAction) => CountryAction;
