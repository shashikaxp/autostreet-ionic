import _ from "lodash";

export function imageArrayGenerator() {

  let imageCount = 6;

  let formattedObject = (id, type) => {
    return {
      id: id,
      src: null,
      isChanged: false,
      type: type
    }
  };

  let update = (images) => {

    let arraySize = _.size(images);
    images = _.map(images, (image) => {
      return {
        id: image.id,
        src: image.url,
        isChanged: false,
        type: 'update'
      }
    });

    let formattedArray = images;
    for (let i = arraySize; i < imageCount; i++) {
      formattedArray.push(formattedObject(i, 'add'));
    }
    return formattedArray;
  };

  let add = () => {
    let tempArray = [];
    for (let i = 0; i < imageCount; i++) {
      tempArray.push(formattedObject(i, 'add'));
    }
    return tempArray;
  };

  return {
    update,
    add
  }

}
