import { createContext, useState } from "react";
export const tableContext = createContext({})

export  const StatesProvider = ({children})=>{
    const [dayOrder,setDorder] = useState([])
    const [tprice, tsetPrice] = useState(0);
    const handleTotalPrice = ()=>{
            let ans = 0;
        dayOrder.map((item)=>(
            ans += item.price
        ))
        tsetPrice(ans);
    }
    function handleOrderDay(item){
        console.log(item.id)
        setDorder([...dayOrder , {...item,payment:true}])
        let newDayOrder = [...dayOrder , {...item,payment:true}]
        localStorage.setItem('ordersTheDayOneDay',JSON.stringify(newDayOrder))

        localStorage.removeItem(`${item.tableId}`);
        window.location.href ='/dashboard'
    }
    function handleOrderDayclose(item){
        alert(item.id)
        localStorage.removeItem(`${item.tableId}`);
        // localStorage.removeItem(`${item.tableId}`);
        window.location.href ='/dashboard'
    }
    return(
        <tableContext.Provider
        value={{dayOrder,setDorder,tprice, tsetPrice , handleTotalPrice,handleOrderDay,handleOrderDayclose}}>
            {children}
        </tableContext.Provider>
    
    )
}