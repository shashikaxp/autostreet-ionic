import { ITEM_TYPES } from "../../config";

export const formFields = {
  Title: 'title',
  Price: "price",
  City: "city",
  District: "district",
  Brand: "brand",
  Model: "model",
  Year: "year",
  ItemType: "item_type",
  ItemCategory: "item_category",
  Fuel: "fuel",
  VehicleType: "vehicle_type",
  EngineCapacity: "engine_capacity",
  Transmission: "transmission",
  Condition: "condition",
  Mileage: "millage", //TODO change to mileage
  Contacts: "contacts",
  Description: "description"
};

export let formConfig = {};

formConfig[ITEM_TYPES.VEHICLE] =
  [formFields.Title, formFields.Description, formFields.Price, formFields.City,
    formFields.Model, formFields.Year,
    formFields.ItemCategory, formFields.Fuel, formFields.EngineCapacity,
    formFields.Transmission, formFields.Condition,
    formFields.Mileage, formFields.Contacts];

formConfig[ITEM_TYPES.SPARE_PART] =
  [formFields.Title, formFields.Description, formFields.Price, formFields.City,
    formFields.Model, formFields.Condition, formFields.Contacts,
    formFields.ItemCategory];
