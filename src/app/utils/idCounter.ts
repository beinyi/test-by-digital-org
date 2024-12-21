function idCounterCreate() {
  let idCounter = 0;
  return function () {
    return ++idCounter;
  };
}

const idCounter = idCounterCreate();

export default idCounter;
