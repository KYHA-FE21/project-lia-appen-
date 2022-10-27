import { useState } from 'react'

const useLocalStorage = (key, value) => {

	const [store, setStore] = useState(() => {
		if (typeof window === 'undefined') {
			console.log(value)
			return value
		}

		try {
			const item = window.localStorage.getItem(key);

			return item ? JSON.parse(item) : value

		} catch (error) {

			console.log(error)

			return value
		}

	})

	const setValue = (value) => {

		try {
			const giveStore = value instanceof Function ? value(store) : value;

			//save
			setStore(giveStore)

			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(giveStore))
			}
			
		} catch (error) {
			console.log(error)
		}
	 	
	}

	return [store, setValue] 
	
}

export default useLocalStorage