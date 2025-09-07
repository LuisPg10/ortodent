export const createMansoryGrid = <T>(
  items: T[],
  columns: number,
  itemsPerColumn: number
): T[][] => {
  return Array.from({ length: columns }, (_, colIndex) => {
    return items
      .filter((_, i) => i % columns === colIndex) // it is distributed as mansory type
      .slice(0, itemsPerColumn); // limits the number of elements per column
  });
};
