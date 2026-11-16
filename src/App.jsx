import { useEffect, useState } from "react"
import usagi from "./assets/usagi.png"
import kawa from "./assets/kawa.png"
import chika from "./assets/chika.png"
import flores from "./assets/flores.png"
import fondoTexto from "./assets/fondo-texto.png"
import adornillo from "./assets/adornillo.png"

const cuteMessages = [
  "Preparando algo bonito para ti...",
  "Eres mi persona favorita.",
  "Cada detalle aquí es con mucho amor.",
  "Gracias por hacerme tan feliz.",
  "Sonríe, esto se hizo pensando en ti.",
  "Eres lo mejor que me ha pasado.",
].map((msg) => `${msg} ♥`)

const imagesToPreload = [usagi, kawa, chika, flores, fondoTexto, adornillo]

function App() {
  const [loading, setLoading] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [message, setMessage] = useState(
    () => cuteMessages[Math.floor(Math.random() * cuteMessages.length)]
  )

  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    const messageTimer = setInterval(() => {
      setMessage(cuteMessages[Math.floor(Math.random() * cuteMessages.length)])
    }, 1500)

    const exitTimer = setTimeout(() => {
      setExiting(true)
      clearInterval(messageTimer)
    }, 5000)

    const removeTimer = setTimeout(() => {
      setLoading(false)
    }, 5600)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
      clearInterval(messageTimer)
    }
  }, [])

  return (
    <>
      {loading && (
        <div className={`loader-overlay${exiting ? " loader-overlay-exit" : ""}`} role="status" aria-live="polite">
          <div className="loader-modal">
            <p className="loader-message">{message}</p>
            <div className="loader-bar" aria-hidden="true">
              <div className="loader-bar-fill" />
            </div>
          </div>
        </div>
      )}
      <div
        className="top-decor"
        style={{ backgroundImage: `url(${adornillo})` }}
        aria-hidden="true"
      />
      <div className="side-flowers side-flowers-left" aria-hidden="true">
        <img src={flores} alt="" className="side-flower" />
        <img src={flores} alt="" className="side-flower" />
        <img src={flores} alt="" className="side-flower" />
      </div>
      <div className="side-flowers side-flowers-right" aria-hidden="true">
        <img src={flores} alt="" className="side-flower" />
        <img src={flores} alt="" className="side-flower" />
        <img src={flores} alt="" className="side-flower" />
      </div>
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
    </>
  )
}

export default App
