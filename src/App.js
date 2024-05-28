import { useState } from 'react'
import Banner from './compontentes/Banner'
import CampoTexto from './compontentes/CampoTexto'
import Formulario from './compontentes/Formulario'

function App() {
	const [colaboradores, setColaboradores] = useState([])

	const aoNovoColaboradorAdicionado = (colaborador) => {
		setColaboradores([...colaboradores, colaborador])
	}
	return (
		<div className="App">
			<Banner />
			<Formulario
				aoColaboradorCadastrado={(colaborador) =>
					aoNovoColaboradorAdicionado(colaborador)
				}
			/>
		</div>
	)
}

export default App
