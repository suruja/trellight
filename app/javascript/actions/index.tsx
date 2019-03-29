import fetch from 'cross-fetch'
import * as constants from '../constants'
import { Card, Cards, Column, Columns } from '../types'

export interface MoveCard {
  type: constants.MOVE_CARD;
  id: number;
  srcIndex: number;
  srcColumnId: number;
  destIndex: number;
  destColumnId: number;
}

export function moveCard({ id, srcIndex, srcColumnId, destIndex, destColumnId }:
  {id: number, srcIndex: number, srcColumnId: number, destIndex: number, destColumnId: number}): MoveCard {

  return {
    type: constants.MOVE_CARD,
    id,
    srcIndex,
    srcColumnId,
    destIndex,
    destColumnId,
  }
}

export interface FetchCards {
  type: constants.FETCH_CARDS;
  cards: Array<Card>;
}

export function setCards({ cards }: { cards: Array<Card> }) : FetchCards {
  return {
    type: constants.FETCH_CARDS,
    cards,
  }
}

export function fetchCards(): any {
  return (dispatch): any => {
    fetch("/api/cards")
      .then(resp => resp.json())
      .then(resp => {
        const cards = resp.data.map(({ attributes }) => attributes)
        dispatch(setCards({ cards: cards as Array<Card> }))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export interface FetchColumns {
  type: constants.FETCH_COLUMNS;
  columns: Array<Column>;
}

export function setColumns({ columns }: { columns: Array<Column> }) : FetchColumns {
  return {
    type: constants.FETCH_COLUMNS,
    columns,
  }
}

export function fetchColumns(): any {
  return (dispatch): any => {
    fetch("/api/columns")
      .then(resp => resp.json())
      .then(resp => {
        const columns = resp.data.map(({ attributes }) => attributes)
        dispatch(setColumns({ columns: columns as Array<Column> }))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export type CardAction = MoveCard | FetchColumns | FetchCards

export type ColumnAction = MoveCard | FetchColumns | FetchCards

export type Action = CardAction | ColumnAction
