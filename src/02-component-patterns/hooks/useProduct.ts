import { useState } from "react";

export const useProduct = (initial: number = 0) => {
    const [counter, setCounter] = useState(initial);

    const increaseBy = (value:number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }

    return {
        counter,
        increaseBy
    }
}