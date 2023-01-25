import {
	createContext,
	useContext,
	useMemo,
	useReducer,
	ReactNode,
} from 'react'

const initialState = {
	active: '',
}

interface ReducerProps {
	active: string
}

interface ActionProps {
	type: string
	value: string
}

interface ActiveCardProviderProps {
	children: ReactNode
}

interface ActiveCardContextProps {
	setCardActive: (event: any) => void
	active: string
}

function reducer(state: ReducerProps, action: ActionProps) {
	switch (action?.type) {
		case 'setActive':
			return {
				...state,
				active: action?.value,
			}

		case 'clearActive':
			return {
				...state,
				active: '',
			}

		default:
			return state
	}
}

const ActiveCardContext = createContext(initialState as ActiveCardContextProps)

const ActiveCardProvider = ({ children }: ActiveCardProviderProps) => {
	const [reduceState, setReduceState] = useReducer(reducer, initialState)

	function setCardActive(event: any) {
		// if (!event) return
		// event.stopPropagation()
		// if (!event?.target) return
		// const activeCard = event.target
		// const slider = activeCard.parentElement
		// for (const card of slider.querySelectorAll('img')) {
		// 	if (card.id !== activeCard.id) {
		// 		card.animate(
		// 			{
		// 				zIndex: '1',
		// 				opacity: '0',
		// 			},
		// 			{ duration: 1, fill: 'forwards' }
		// 		)
		// 	}
		// 	if (card.id === activeCard.id) {
		// 		card.animate(
		// 			{
		// 				position: 'absolute',
		// 				objectPosition: 'center',
		// 				objectFit: 'fill',
		// 				width: '100vw',
		// 				height: '100vh',
		// 				zIndex: '2',
		// 				transform: 'scale(300%)',
		// 			},
		// 			{ duration: 500, fill: 'forwards' }
		// 		)
		// 		slider.animate(
		// 			{
		// 				left: '0',
		// 			},
		// 			{ duration: 480, fill: 'forwards' }
		// 		)
		// 	}
		// }
	}

	const reducerProps = useMemo(
		() => ({
			...reduceState,
			setCardActive,
		}),
		[reduceState]
	)

	return (
		<ActiveCardContext.Provider value={reducerProps}>
			{children}
		</ActiveCardContext.Provider>
	)
}

const useCardContext = () => useContext(ActiveCardContext)

export { useCardContext, ActiveCardProvider }
