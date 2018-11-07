import { API_URL } from "../../../config";

export const ENDPOINTS = {

  // auth endpoints
  AUTH: {
    LOGIN: API_URL + "users/tokens"
  },

  // company endpoints
  COMPANY: {
    REGISTER: API_URL + "companies"
  },

  //Spare Parts
  PARTS: {
    MANUFACTURERS: API_URL + "manufacturers",
    MODELS: API_URL + "manufacturers/{{param1}}/models",
    CATEGORIES: API_URL + "spare-parts/categories",
    ADD: API_URL +  "companies/{{param1}}/spare-parts"
  }

};
