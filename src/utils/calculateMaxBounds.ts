export const calculateMaxBounds = (
  coordinates: [number, number],
  radius: number
): [[number, number], [number, number]] | null => {
  const metersToLatitude = 1 / 111000;
  const metersToLongitude =
    1 / (111000 * Math.cos((coordinates[1] * Math.PI) / 180));

  return [
    [
      coordinates[0] - radius * metersToLongitude,
      coordinates[1] - radius * metersToLatitude,
    ],
    [
      coordinates[0] + radius * metersToLongitude,
      coordinates[1] + radius * metersToLatitude,
    ],
  ];
};
