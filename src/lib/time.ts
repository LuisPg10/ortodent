export const delay = (value: number) => {
  return new Promise((resolve) => setTimeout(resolve, value));
};
