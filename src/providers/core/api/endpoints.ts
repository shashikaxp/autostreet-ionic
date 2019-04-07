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

  SELLERS: {
    REGISTER: API_URL + "sellers",
    ITEMS: API_URL + "sellers/{{param1}}/items?{{param2}}",
    ITEM_DETAILS: API_URL + "items/{{param1}}",
    ADD_ITEM: API_URL + "sellers/{{param1}}/items",
    DELETE_ITEM: API_URL + "items/{{param1}}",
    UPDATE_ITEM: API_URL + "sellers/{{param1}}/items/{{param2}}",
    ADD_IMAGES: API_URL + "items/{{param1}}/images",
    UPDATE_IMAGE: API_URL + "items/{{param1}}/images/{{param2}}",
    DELETE_IMAGE: API_URL + "items/{{param1}}/images/{{param2}}"
  },

  PUBLIC: {
    ITEMS: SEARCH_API_URL + "items"
  }

};
