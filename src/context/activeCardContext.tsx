import { createContext, useContext, useMemo, useReducer } from 'react'

const initialState = {
	active: '',
}

interface ReducerProps {
	active: string
}

interface ActionProps {
	type: string
	value: Partial<ReducerProps>
}

function reducer(state: ReducerProps, action: ActionProps) {
	switch (action?.type) {
	}
}
