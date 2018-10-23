import { API_URL } from "../../../config";

export const ENDPOINTS = {

  // auth endpoints
  AUTH : {
    LOGIN : API_URL + "users/tokens"
  },

  // company endpoints
  COMPANY : {
    REGISTER: API_URL + "companies"
  }

};
