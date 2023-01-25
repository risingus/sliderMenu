import { Slider } from './components/Slider'
import { ActiveCardProvider } from './context/activeCardContext'

function App() {
	return (
		<ActiveCardProvider>
			<Slider />
		</ActiveCardProvider>
	)
}

export default App
