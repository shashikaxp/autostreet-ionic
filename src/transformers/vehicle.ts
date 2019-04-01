import _ from "lodash"

export function vehicleTransformer(formData) {
  return {
    ...formData,
    contacts: _.values(formData.contacts)
  }
}

