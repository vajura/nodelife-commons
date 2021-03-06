export interface PlayerInterface {
  viewPortX?: number;
  viewPortY?: number;
  viewPortH?: number;
  viewPortW?: number;
  zoom?: number;
  color?: number;
}

export function createPlayer() {
  return {
    viewPortX: 0,
    viewPortY: 0,
    viewPortH: 200,
    viewPortW: 200,
    zoom: 4,
    color: 0XFF000000
  };
}
