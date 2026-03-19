import { useState } from 'react'
import './App.css'

import bodenCoral from './assets/guitarras/Boden Essential 6 Coral Pink.avif'
import bodenAmber from './assets/guitarras/Boden Original N2.7 Amber Haze Burst Gloss.avif'
import bodenBlack from './assets/guitarras/Boden Singularity NX 7 Pitch Black.avif'
import bodenBlue from './assets/guitarras/Boden Standard N2.6 Blue Aura Metallic.avif'
import bodenTeal from './assets/guitarras/Boden Standard N2.6 Transformative Teal Metallic.avif'
import bodenBlue27 from './assets/guitarras/Boden Standard N2.7 Blue Aura Metallic.avif'
import BodenProgNX6PE from './assets/guitarras/Boden Prog NX 6 Plini Edition.avif'
import BodenSTNX6PEM from './assets/guitarras/Boden Standard NX 6 Plini Edition Mirage.avif'
import salenJazz from './assets/guitarras/Sälen Jazz NX 6 Natural.avif'
import strandbergTeal from './assets/guitarras/Strandberg Boden Essential 6 Transformative Teal.avif'
import ehb1500 from './assets/guitarras/EHB1500.png'
import ehb1675 from './assets/guitarras/EHB1675MS.png'
import ichi10 from './assets/guitarras/ICHI10.png'
import krys10 from './assets/guitarras/KRYS10.png'
import mgfm10 from './assets/guitarras/MGFM10.png'
import tod10n from './assets/guitarras/TOD10N.png'
import tod20fmn from './assets/guitarras/TOD20FMN.png'
import tod70 from './assets/guitarras/TOD70.png'
import tod100fmn from './assets/guitarras/TOD100FMN.png'
import tod100n from './assets/guitarras/TOD100N.png'


const guitarras = [
  { id: 1, src: bodenCoral, nombre: 'Boden Essential 6 – Coral Pink' },
  { id: 2, src: bodenAmber, nombre: 'Boden Original N2.7 – Amber Haze Burst Gloss' },
  { id: 3, src: bodenBlack, nombre: 'Boden Singularity NX 7 – Pitch Black' },
  { id: 4, src: bodenBlue, nombre: 'Boden Standard N2.6 – Blue Aura Metallic' },
  { id: 5, src: bodenTeal, nombre: 'Boden Standard N2.6 – Transformative Teal Metallic' },
  { id: 6, src: bodenBlue27, nombre: 'Boden Standard N2.7 – Blue Aura Metallic' },
  { id: 7, src: BodenProgNX6PE, nombre: 'Boden Prog NX 6 Plini Edition' },
  { id: 8, src: BodenSTNX6PEM, nombre: 'Boden Standard NX 6 Plini Edition Mirage' },
  { id: 9, src: salenJazz, nombre: 'Sälen Jazz NX 6 – Natural' },
  { id: 10, src: strandbergTeal, nombre: 'Strandberg Boden Essential 6 – Transformative Teal' },
  { id: 11, src: ehb1500, nombre: 'Ibanez EHB1500' },
  { id: 12, src: ehb1675, nombre: 'Ibanez EHB1675MS' },
  { id: 13, src: ichi10, nombre: 'Ibanez ICHI10' },
  { id: 14, src: krys10, nombre: 'Ibanez KRYS10' },
  { id: 15, src: mgfm10, nombre: 'Ibanez MGFM10' },
  { id: 16, src: tod10n, nombre: 'Ibanez TOD10N' },
  { id: 17, src: tod20fmn, nombre: 'Ibanez TOD20FMN' },
  { id: 18, src: tod70, nombre: 'Ibanez TOD70' },
  { id: 19, src: tod100fmn, nombre: 'Ibanez TOD100FMN' },
  { id: 20, src: tod100n, nombre: 'Ibanez TOD100N' }
]


function App() {
  const [imagenActiva, setImagenActiva] = useState(null)
  const [cerrando, setCerrando] = useState(false)

  const cerrarModal = () => {
    setCerrando(true)
    setTimeout(() => {
      setImagenActiva(null)
      setCerrando(false)
    }, 300)
  }

  return (
    <div className="contenedor">
      <h1>Strandberg - Ibanez</h1>
      <h2>Guitar Gallery</h2>


      <div className="galeria">
        {guitarras.map((guitarra) => (
          <div
            key={guitarra.id}
            className="item"
            onClick={() => setImagenActiva(guitarra)}
          >
            <img src={guitarra.src} alt={guitarra.nombre} />
            <p>{guitarra.nombre}</p>
          </div>
        ))}
      </div>

      {imagenActiva && (
        <div
          className={`modal ${cerrando ? 'cerrando' : ''}`}
          onClick={cerrarModal}
        >
          <button
            className="cerrar"
            onClick={(e) => {
              e.stopPropagation()
              cerrarModal()
            }}
          >
            ×
          </button>

          <img src={imagenActiva.src} alt={imagenActiva.nombre} />
          <h2>{imagenActiva.nombre}</h2>
        </div>
      )}
    </div>
  )
}

export default App
