import { useScores } from '../app/game/hooks'
import cn from 'classnames'

const PlayerScore = ({ id }) => {
  const scores = useScores()

  return (
    <div
      className={cn('font-black uppercase flex flex-col', {
        'items-end': id === 0,
      })}
    >
      <div
        className={cn('text-6xl', {
          'text-blue-600': id,
          'text-red-600': !id,
        })}
      >
        Oyuncu {id + 1} ({!id ? 'X' : 'O'})
      </div>
      <div
        className={cn('text-3xl flex space-x-2 items-center', {
          'pr-2': !id,
          'pl-px': id,
        })}
      >
        <span>Skor:</span> <span className="text-7xl">{scores[id]}</span>
      </div>
    </div>
  )
}

export default PlayerScore
