import { IData } from '../mocks/data';

export const sortedGoods = (array: any, direction: string) => {
  if (direction === 'asc') {
    const sorted = [...array].sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
    return sorted;
  }
  if (direction === 'desc') {
    const sorted = [...array].sort((a, b) => (a.name !== b.name ? (a.name < b.name ? 1 : -1) : 0));
    return sorted;
  }
  return sortedGoods;
};
