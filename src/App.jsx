import PlayerScore from './components/player-score'
import Top from './components/top'
import Tables from './components/tables'

const App = () => (
  <>
    <Top />
    <main className="w-screen h-screen flex justify-evenly items-center">
      <PlayerScore id={0} />
      <Tables />
      <PlayerScore id={1} />
    </main>
    <div className="absolute -top-2 left-3 right-2 bottom-2 text-9xl font-black flex justify-between tracking-widest overflow-hidden pointer-events-none">
      <div className="drop-shadow-xl text-blue-600 self-start opacity-10">
        MEGA
      </div>
      <div className="drop-shadow-xl text-red-600 self-end opacity-10">XOX</div>
    </div>
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-zinc-200 italic font-black text-sm pointer-events-none">
      xq - Barış
    </div>
  </>
)

export default App
