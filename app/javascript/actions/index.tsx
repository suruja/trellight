import fetch from 'cross-fetch'
import * as constants from '../constants'
import { Card, Cards, Column, Columns } from '../types'

export interface MoveCard {
  type: constants.MOVE_CARD;
  id: number;
  srcPosition: number;
  srcColumnId: number;
  destPosition: number;
  destColumnId: number;
}

export interface ReceiveMoveCard {
  type: constants.RECEIVE_MOVE_CARD;
  id: number;
  srcPosition: number;
  srcColumnId: number;
  destPosition: number;
  destColumnId: number;
  sessionId: string;
}


export function moveCard({ id, srcPosition, srcColumnId, destPosition, destColumnId }:
  {id: number, srcPosition: number, srcColumnId: number, destPosition: number, destColumnId: number}): MoveCard {

  return {
    type: constants.MOVE_CARD,
    id,
    srcPosition,
    srcColumnId,
    destPosition,
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

export function updateCard({ id, srcPosition, srcColumnId, destPosition, destColumnId }:
  {id: number, srcPosition: number, srcColumnId: number, destPosition: number, destColumnId: number}): any {
  return (dispatch): any => {
    fetch(`/api/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sessionId: constants.SESSION_ID,
        srcPosition,
        srcColumnId,
        destPosition,
        destColumnId,
      }),
    })
      .catch(err => {
        console.log(err)
      })
  }
}

export function moveAndUpdateCard(args): any {
  return (dispatch): any => {
    dispatch(moveCard(args))
    dispatch(updateCard(args))
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

export type MoveCardAction = ReceiveMoveCard | MoveCard

export type CardAction = MoveCardAction | FetchCards

export type ColumnAction = FetchColumns

export type Action = CardAction | ColumnAction
