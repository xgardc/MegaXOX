import { useTurn } from '../app/game/hooks'
import cn from 'classnames'

const Top = () => {
  const turn = useTurn()

  return (
    <div
      className={cn({
        'text-red-600': turn,
        'text-blue-600': !turn,
      })}
    >
      <div
        className={cn(
          'fixed left-1/2 -translate-x-1/2 text-2xl mt-4 tracking-wide font-medium flex items-center justify-center transition-all',
          { 'pr-4': turn, 'pl-4': !turn }
        )}
      >
        Sıra {turn ? 1 : 2}. oyuncuda
      </div>
      <div className="fixed left-1/2 -translate-x-1/2 text-2xl mt-4 tracking-wide font-medium w-72 flex justify-between items-center">
        <span
          className={cn('font-black transition-all', {
            'opacity-100 visible': turn,
            'opacity-0 invisible': !turn,
          })}
        >
          <span>{'<<'}</span>
        </span>
        <span
          className={cn('font-black transition-all', {
            'opacity-100 visible': !turn,
            'opacity-0 invisible': turn,
          })}
        >
          {' >>'}
        </span>
      </div>
    </div>
  )
}

export default Top
