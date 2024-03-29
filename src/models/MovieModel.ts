export type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | any;
    budget: number;
    genres: {
      id: number;
      name: string;
    }[];
    name?:string;
    title?:string;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[];
  }
  
  export interface Originals {
    backdrop_path: string | null;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name?: string;
    title?: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    vote_average: number;
    vote_count: number;
  }
  