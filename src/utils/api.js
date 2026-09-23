const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};

// Failures resolve with an Error instead of rejecting; existing callers rely on
// this (it matches the previous axios wrapper) until the RTK Query migration.
export const fetchDataFromApi = async (url, params) => {
  try {
    const requestUrl = new URL(BASE_URL + url);
    Object.entries(params ?? {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        requestUrl.searchParams.append(key, value);
      }
    });

    const response = await fetch(requestUrl, { headers });
    if (!response.ok) {
      const err = new Error(`Request failed with status code ${response.status}`);
      err.status = response.status;
      return err;
    }
    return await response.json();
  } catch (err) {
    return err;
  }
};
