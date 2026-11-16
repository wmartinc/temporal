import usagi from "./assets/usagi.png"
import kawa from "./assets/kawa.png"
import chika from "./assets/chika.png"

function App() {
  return (
    <main className="page">
      <h1 className="title">Ya me gané a la mejor novia del mundo</h1>
      <div className="content-wrapper">
        <img src={usagi} alt="" className="content-corner content-corner-left" aria-hidden="true" />
        <img src={kawa} alt="" className="content-corner content-corner-right" aria-hidden="true" />
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <img src={chika} alt="" className="content-bottom" aria-hidden="true" />
      </div>
    </main>
  )
}

export default App
