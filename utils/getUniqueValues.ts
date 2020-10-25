const getUniqueValues = (arr: Array<string | number>) => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

export default getUniqueValues;
