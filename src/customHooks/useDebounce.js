import { useEffect, useState } from "react";

const useDebounce = (value = 0, duration = 100) => {
    const [debValue, setDebValue] = useState(value);
    
    useEffect(() => {
        const timeout = setTimeout(() => setDebValue(value), duration);

        return () => clearTimeout(timeout);

    }, [value, duration]);

    return [debValue];
}
export default useDebounce;