import { useSelector } from 'react-redux'
import { _makeMove } from '.'
import store from '../store'

export const useTables = () => ({
  tables: useSelector((state) => state.game.tables),
  activeTable: useSelector((state) => state.game.activeTable),
})

export const makeMove = ({ tableId, fieldId, move }) =>
  store.dispatch(_makeMove({ tableId, fieldId, move }))

export const useScores = () => useSelector((state) => state.game.scores)
export const useTurn = () => useSelector((state) => state.game.turn)
