import { useCallback } from 'react'
import { makeMove } from '../app/game/hooks'
import cn from 'classnames'

const Table = ({ table, tableId, active }) => {
  const handleMakeMove = useCallback(
    (fieldId, move) => {
      makeMove({ tableId, fieldId, move })
    },
    [tableId]
  )

  return table.result !== null ? (
    <div className="w-40 h-40 flex items-center justify-center text-9xl font-black">
      {table.result ? 'X' : 'O'}
    </div>
  ) : (
    <div
      className={cn(
        'w-40 h-40 border grid grid-cols-3 grid-rows-3 gap-px bg-gradient-radial to-60% rounded-sm overflow-hidden transition-all',
        {
          'from-zinc-500 to-zinc-300 border-zinc-300 opacity-50': !active,
          'from-zinc-950 to-zinc-600 border-zinc-600 opacity-100 scale-105':
            active,
        }
      )}
    >
      {table.fields.map((field) => (
        <button
          key={field.id}
          type="button"
          disabled={!active || field.value !== null}
          onClick={() => handleMakeMove(field.id, 0)}
          className="bg-white transition-colors hover:bg-zinc-100 active:bg-zinc-200 disabled:!bg-white disabled:cursor-not-allowed"
        >
          {field.value === null ? '' : field.value === 1 ? 'X' : 'O'}
        </button>
      ))}
    </div>
  )
}

export default Table
