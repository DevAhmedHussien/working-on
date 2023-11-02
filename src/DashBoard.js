import { useEffect, useState } from "react"



export default function Dashboard (dayOrder,setDorder){
    let [x , setX] = useState([])
    // console.log('dayOrder',dayOrder)
    // console.log('setDorder',setDorder)
    // console.log('dayOrder date ',dayOrder.date)
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('ordersTheDayOneDay'))
        console.log('data',data)
        setX(data)
    },[])
    // console.log(dayOrder)
    return(
        <>
        <div> { x.map((item)=>{
        return (
            <div key={item.id}>
                <div>
                    <p>date:{item.date}</p>
                    <p> table : {item.table}</p>
                    <p> price : {item.price}</p>
                    <div>
                        {item.productsOfOrder.map((product) =>{
                            return (
                                <div>
                                    <p>name: {product.name}</p>
                                    <img src={product.img} alt=""/>
                                    <p > price food:  {product.price}</p>
                                    <p> quantity :{product.quantity}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr/>
            </div>)
        })} 
            </div> 
        </>
    )
}