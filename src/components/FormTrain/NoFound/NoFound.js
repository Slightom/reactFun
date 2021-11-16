import { render } from "@testing-library/react"
import { useEffect, useState } from "react";
import { Redirect } from "react-router";



const NoFound = () => {
    const [s, setS] = useState(5);

    useEffect(() => {
        const t = setInterval(() => setS(s => s - 1), 1000);

        return () => {
            clearInterval(t);
            console.log('clear');
        }
    }, [])


    return (
        <div>
            {s > 0
                ? <p>Check url, page not founded. You will be redirected to mainPage in {s} seconds</p>
                : <Redirect to={'/'} />}
        </div>
    )
}

export default NoFound;