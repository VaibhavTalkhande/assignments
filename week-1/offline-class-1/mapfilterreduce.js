let car = [
    {
      id: 1,
      color: "red",
      type: "suv",
      name: "x700",
    },
    {
      id: 2,
      color: "blue",
      type: "sedan",
      name: "verna",
    },
  ];
  
  const newCar = car.map((index) => {
    return index;
  });
  console.log(newCar);
  const carfilter = car.filter((index) => {
    return index.id == 2;
  });
  console.log(carfilter);
  console.log(
    car.reduce((cars, index) => {
      return cars.id + index.id;
    }),
  );
  