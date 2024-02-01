// ./src/Constants/URLs.ts
import { API_KEY } from "./constants"

export const originalsUrl =`trending/all/week?api_key=${API_KEY}&language=en-US`
export const actionUrl =`discover/tv?api_key=${API_KEY}&with_networks=213`
export const ComedyUrl = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const horrorUrl = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const romanceUrl = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentariesUrl = `discover/movie?api_key=${API_KEY}&with_genres=99`