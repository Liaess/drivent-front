export function renderEachIcon(eachRoom, chosenRoom) {
  const allPlaces = [];

  for (let i = 1; i <= eachRoom.available; i++) {
    allPlaces.push({
      place: i,
      isReserved: false,
      selectByUser: false,
      number: eachRoom.number,
      available: eachRoom.available,
      roomId: eachRoom.id,
    });
  }

  for (let i = 0; i < eachRoom.maxCapacity - eachRoom.available; i++) {
    const newIndex = allPlaces.length;
    if (eachRoom.available === 0) {
      allPlaces.push({
        place: newIndex,
        isReserved: true,
        isDisabled: true,
        number: eachRoom.number,
        available: eachRoom.available,
        roomId: eachRoom.id,
      });
    } else {
      allPlaces.push({
        place: newIndex,
        isReserved: true,
        number: eachRoom.number,
        available: eachRoom.available,
        roomId: eachRoom.id,
      });
    }
  }
  return allPlaces;
}
