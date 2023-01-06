export const changeArrDimension = (items, itemsInSlide) => {
  let i = 0;
  let updatedItems = [];
  while (i < items.length) {
    let tempArr = [];
    for (let j = 0; j < itemsInSlide; j++) {
      if (!items[i + j]) {
        break;
      }
      tempArr.push(items[i + j]);
    }
    updatedItems.push(tempArr);
    i = i + itemsInSlide;
  }

  return updatedItems;
};
