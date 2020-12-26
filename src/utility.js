//utility functions

const utility = {
  removeItemFromArray(arr, item) {
    var index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  },
};

export default utility;
