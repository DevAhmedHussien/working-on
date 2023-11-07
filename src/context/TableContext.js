import { createContext, useState } from "react";
export const openTableContext = createContext({})

export  const TableProvider = ({children})=>{
    const [openTable,setOpenTabel]=useState({
        id:0,
        tableId:0,
        date:0,
        orders:0,
        payment:false,
        price:0
})
    return(
        <openTableContext.Provider
        value={{openTable,setOpenTabel}}>
            {children}
        </openTableContext.Provider>
    
    )
}