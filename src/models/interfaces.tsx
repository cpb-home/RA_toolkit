export interface ISearchField {
  text: string;
}

export interface IFilmListReducer {
  loading: boolean;
  error: string;
  films: IFilmsListItem[];
}

export interface IFilmsListItem {
  Title?: string;
  Year?: string;
  imdbID: string;
  Type?: string;
  Poster?: string;
}

export interface IFilmListFetch {
  Search: IFilmsListItem[];
}

export interface IFavoriteReducer {
  films: IFilmsListItem[];
}