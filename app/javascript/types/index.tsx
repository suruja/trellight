export interface Card {
  id: number;
  title: string;
  position: number;
  columnId: number;
}

export interface Cards {
  [id: number]: Card;
}

export interface Column {
  id: number;
  title: string;
  position: number;
}

export interface Columns {
  [id: number]: Column;
}

export interface StoreState {
  cards: Cards;
  columns: Columns;
}
