import * as constants from '../constants';

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

export type CardAction = MoveCard

export type Action = CardAction
