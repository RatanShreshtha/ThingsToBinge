export type Genre = {
  id: number;
  name: string;
};

export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
};

export type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
};

export type Language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Content = {
  id: number;
  imdb_id: string;
  name: string;
  tagline: string;
  overview: string;
  poster_path: string;
  writers: string;
  directors: string;

  adult: boolean;
  backdrop_path: string;
  budget: number;
  revenue: number;
  genres: Genre[];
  actors: Cast[];
  actresses: Cast[];
  spoken_languages: Language[];
  vote_average: number;
  vote_count: number;
  release_date: string;
};

export type IpGeoLocation = {
  languages: string;
  country: string;
};
