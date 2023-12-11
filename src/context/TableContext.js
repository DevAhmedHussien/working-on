import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const openTableContext = createContext({})

export  const TableProvider = ({children})=>{
    const [openTable,setOpenTabel]=useState({
        id:uuidv4(),
        tableId:0,
        date:0,
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