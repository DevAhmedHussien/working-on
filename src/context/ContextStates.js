import { useEffect } from "react";
import { createContext, useState } from "react";

export const tableContext = createContext({})

export  const StatesProvider = ({children})=>{
    const [dayOrder,setDorder] = useState([])
    const [tprice, tsetPrice] = useState(0);
    const [payed, setPayed] = useState([]);

useEffect(() => {
  const filteredObjects = dayOrder.filter(table => table.payment === true);
  setPayed(filteredObjects);
}, [dayOrder]);
console.log('payed', payed)

//handlePrice payed 
const handleTotalPrice = ()=>{
    let ans = 0;   
    payed.map((item)=>(
    ans += item.price
    ))
    tsetPrice(ans);
}
 //handle price 
 useEffect(()=>{
    handleTotalPrice();
},[payed])
    // handla click payed chek
    function handleOrderDay(item){
        const arr = dayOrder.map((table)=>{
            if(table.id === item.id){
                    table.payment=true 
            }
            return  table
            })
            setDorder(arr)
            localStorage.removeItem(`${item.tableId}`);
        localStorage.setItem('ordersTheDayOneDay',JSON.stringify(arr))
    }
    //handle delete check
    function handleOrderDayclose(item){
        // alert(d.id)
        const arr = dayOrder.filter((table)=>table.id !== item.id);//delete element from array
        setDorder(arr);
        localStorage.setItem('ordersTheDayOneDay',JSON.stringify(arr))
    }
    return(
        <tableContext.Provider
        value={{dayOrder,setDorder,tprice, tsetPrice , handleTotalPrice,handleOrderDay,handleOrderDayclose,payed}}>
            {children}
        </tableContext.Provider>
    
    )
}