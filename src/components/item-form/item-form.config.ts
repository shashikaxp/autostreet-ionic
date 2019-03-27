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
  Mileage: "mileage",
  Contacts: "contacts",
  Description: "description"
};


export let formConfig = {};

formConfig[ITEM_TYPES.VEHICLE] =
  [formFields.Title, formFields.Price, formFields.Model, formFields.Year, formFields.ItemCategory];

formConfig[ITEM_TYPES.SPARE_PART] =
  [formFields.Price, formFields.City, formFields.Model, formFields.Fuel, formFields.Transmission, formFields.Description,
    formFields.Description, formFields.ItemCategory, formFields.Condition, formFields.Mileage, formFields.EngineCapacity];
