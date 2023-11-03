import { useTables } from '../app/game/hooks'
import Table from './table'

const Tables = () => {
  const { tables, activeTable } = useTables()

  return (
    <div className="border-2 border-zinc-300 grid grid-cols-3 grid-rows-3 w-fit h-fit gap-[1.5px] bg-gradient-radial from-zinc-600 to-90% to-zinc-200">
      {tables.map((table, index) => (
        <div key={index} className={'p-4 bg-white'}>
          <Table
            table={table}
            fields={table.fields}
            tableId={index}
            active={activeTable === null || activeTable === index}
          />
        </div>
      ))}
    </div>
  )
}

export default Tables
