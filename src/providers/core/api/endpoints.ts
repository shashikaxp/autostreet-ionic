import { API_URL, SEARCH_API_URL } from "../../../config";

export const ENDPOINTS = {

  // auth endpoints
  AUTH: {
    LOGIN: API_URL + "users/tokens"
  },

  // form fields
  FORM: {
    DISTRICTS: API_URL + "districts",
    CITY: API_URL + "districts/{{param1}}/cities",
    BRANDS: API_URL + "brands",
    MODEL: API_URL + "brands/{{param1}}/models",
    CATEGORY: API_URL + "items/categories?type={{param1}}",
    CONDITION: API_URL + "items/conditions?type={{param1}}",
    FUEL: API_URL + 'items/fuel-types',
    TRANSMISSION: API_URL + 'items/transmissions'
  },

  ITEM: {
    ADD: API_URL + "sellers/{{param1}}/items",
    DELETE: API_URL + "items/{{param1}}",
    UPDATE: API_URL + "sellers/{{param1}}/items/{{param2}}",
    ADD_IMAGES: API_URL + "items/{{param1}}/images",
    UPDATE_IMAGE: API_URL + "items/{{param1}}/images/{{param2}}",
    DELETE_IMAGE: API_URL + "items/{{param1}}/images/{{param2}}"
  },
  
  SELLERS: {
    REGISTER: API_URL + "sellers",
    ITEMS: API_URL + "sellers/{{param1}}/items?{{param2}}",
    ITEM: API_URL + "items/{{param1}}",
  }

};
