import { useState } from "react"

export const useLocalStorage = (key, defaultvalue) => {
    const getInitialValue = () => localStorage.getItem(key) ?? defaultvalue
    const [value, setValue] = useState(getInitialValue)
    const setAndStoreValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }
    return [value, setAndStoreValue]
}