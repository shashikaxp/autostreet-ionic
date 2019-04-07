import { dataURItoBlob } from "../../../util/blob-convertor/blob-convertor";
import _ from "lodash";

export function formDataGenerator() {

   let  update = (image) => {
    let formData = new FormData();
    formData.append('image', dataURItoBlob(image.src), image.id + '.jpeg');
    return formData;
  };

  let add = (images) => {
    let formData = new FormData();
    _.forEach(images, (image, i) => {
      if (!_.isEmpty(image.src)) {
        formData.append('images', dataURItoBlob(image.src), i + '.jpeg');
      }
    });
    return formData;
  };

  return {
    update,
    add
  }

}




