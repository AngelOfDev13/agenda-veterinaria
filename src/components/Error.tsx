import React from "react"

const Error = ({ children} : { children: React.ReactNode}) => {
    return(
        <p className="my-2 p-2 text-center bg-red-600 font-bold uppercase text-sm"> { children } </p>
    )
}

export default Error