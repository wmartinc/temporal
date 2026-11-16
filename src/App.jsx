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
          Entonces te conocí, y mi corazón dejó atrás el peso de una roca para volverse tan ligero como una pluma. Aunque, a diferencia de ella, no cae al vacío, 
          porque tu calidez lo sostiene, lo acoge y le da un lugar donde sentirse en paz.
          Llegaste tú, y sin darme cuenta, hiciste que volviera a sentir🩵. Ahora, cuando miro tus ojos,
          encuentro una luz que ni la luna en la noche más oscura podría igualar. Hay algo en ti que hace que el mundo parezca menos gris,
          que las noches sean más cálidas y que hasta los momentos más simples tengan un significado especial
          . Quizá no lo sepas, pero desde que te conocí, algo dentro de mí cambió.
        </p>
        <img src={chika} alt="" className="content-bottom" aria-hidden="true" />
      </div>
    </main>
  )
}

export default App
