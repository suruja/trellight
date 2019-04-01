export const SESSION_ID = process.env.NODE_ENV === 'test' ? '' : (document.head.querySelector("meta[name=sessionid]") as any).content
export type SESSION_ID = typeof SESSION_ID

export const FETCH_COLUMNS = 'FETCH_COLUMNS'
export type FETCH_COLUMNS = typeof FETCH_COLUMNS

export const FETCH_CARDS = 'FETCH_CARDS'
export type FETCH_CARDS = typeof FETCH_CARDS

export const MOVE_CARD = 'MOVE_CARD'
export type MOVE_CARD = typeof MOVE_CARD

export const RECEIVE_MOVE_CARD = 'RECEIVE_MOVE_CARD'
export type RECEIVE_MOVE_CARD = typeof RECEIVE_MOVE_CARD

export const SERVER_ACTION = 'SERVER_ACTION'
export type SERVER_ACTION = typeof SERVER_ACTION
