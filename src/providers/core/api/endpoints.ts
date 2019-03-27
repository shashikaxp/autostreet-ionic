import { API_URL } from "../../../config";

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


  // company endpoints
  COMPANY: {
    REGISTER: API_URL + "companies",
    PARTS_LIST: API_URL + "companies/{{param1}}/spare-parts?page={{param2}}&limit={{param3}}"
  },

  //Spare Parts
  PARTS: {
    MANUFACTURERS: API_URL + "manufacturers",
    MODELS: API_URL + "manufacturers/{{param1}}/models",
    CATEGORIES: API_URL + "spare-parts/categories",
    CONDITIONS: API_URL + "spare-parts/conditions",
    ADD: API_URL + "companies/{{param1}}/spare-parts",
    DETAILS: API_URL + "companies/{{param1}}/spare-parts/{{param2}}",
    IMAGE_UPDATE: API_URL + "companies/{{param1}}/spare-parts/{{param2}}/images/{{param3}}",
    ADD_NEW_IMAGE: API_URL + "companies/{{param1}}/spare-parts/{{param2}}/images",
    DELETE_IMAGE: API_URL + "companies/{{param1}}/spare-parts/{{param2}}/images/{{param3}}",
    DETAILS_UPDATE: API_URL + "companies/{{param1}}/spare-parts/{{param2}}"
  }

};
