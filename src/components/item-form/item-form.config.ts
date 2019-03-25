export const formFields  = {
  Title: 'title',
  Price: "price",
  City: "city",
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

export const formConfig = {
  'spare-part': [formFields.Title, formFields.Price, formFields.Model, formFields.City ],
  'vehicle': [formFields.Price, formFields.Model, formFields.Description]
};
