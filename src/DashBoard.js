import { useEffect, useState , useContext } from "react"
import { tableContext } from './context/ContextStates';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
export default function Dashboard (){
const {dayOrder,setDorder,tprice,handleTotalPrice,handleOrderDay
    ,handleOrderDayclose} = useContext(tableContext)

    let [x , setX] = useState([])
useEffect(()=>{
        let local = localStorage;
        let arr = []
        const regex = /table-[0-9]/i;
        for (var key in local) {
        // console.log(key);
            if(key.match(regex)){
                // console.log(key)
                let  r = JSON.parse(localStorage.getItem(key)) 
            //    console.log(r)
                arr.push(r)
                setX(arr)
            // console.log('arr',arr)
    }
    }
    let d = 1;
},[])
useEffect(()=>{
        if (localStorage.getItem('ordersTheDayOneDay') !== null) {
            let payedOrder = JSON.parse(localStorage.getItem('ordersTheDayOneDay')) 
            setDorder(payedOrder)
        }
},[])
useEffect(()=>{
        handleTotalPrice()
},[dayOrder])
console.log('payed',dayOrder)
return(
    <>
    <Box sx={{ p:10 ,marginTop:'20px',display:'flex', flexWrap:'wrap', justifyContent:'center',gap:10}}>
        {x.map((tabel,index)=>{
            return (
            <Box sx={{border:'1px solid blue'}}>
            <Box key={index} 
            sx={{height:400,background:'silver',width:'300px',display:'flex',//overflowY:'scroll',
            scroll:'smooth',
            flexDirection:'column',alignItems:'center'
            ,borderRadius:10,
            position:'relative'
            }}>
                <Link to={`/order/${tabel.tableId}`}  >
                    <h1>{tabel.tableId}</h1>
                <p>{tabel.date}</p>
                </Link>
                <Box>{
                    tabel.productsOfOrder.map((i,index)=>{
                    return <Box key={index}>
                                <span>{i.name}/</span><span> quantity:{i.quantity }  /</span> <span>price:{ +i.quantity * +i.prize}</span>
                            </Box>
                    })
                    }</Box>
            </Box>  
            <Box sx={{padding:1,background:'yellow',}}  >
                <Typography variant="h5" sx={{textAlign:'center'}}>
                    Total:{tabel.price}</Typography>
                    <Box sx={{ margin :'5px 0 5px 0',display:'flex',alignItems:'center',
                    justifyContent:'center',gap:2}}>
                        <Button variant="contained" color="success" 
                        sx={{width:50,height:25,fontSize:11}}
                        onClick={()=>{handleOrderDay(tabel)}}>
                            Success
                        </Button>
                        <Button variant="outlined" color="error"
                        sx={{width:50,height:25,fontSize:11}}
                        onClick={()=>{handleOrderDayclose(tabel)}}>
                            Error
                        </Button>
                    </Box>
                </Box> 
            </Box>  
        )})}
    </Box>
    <Divider light />
        <Typography variant="h2" sx={{textAlign:'center'}}> payed </Typography>
        <Typography variant="h2" sx={{textAlign:'center'}}> total kasa :{tprice} </Typography>
    <Box sx={{ p:10 ,marginTop:'20px',display:'flex', flexWrap:'wrap', justifyContent:'center',gap:10}}>
        {dayOrder.map((tabel,index)=>{
            return (
            <Box sx={{border:'1px solid blue'}}>
            <Box key={index} 
            sx={{height:400,background:'wheat',width:'300px',display:'flex',//overflowY:'scroll',
            scroll:'smooth',
            flexDirection:'column',alignItems:'center'
            ,borderRadius:10,
            position:'relative'
            }}>
                <h1>{tabel.tableId}</h1>
                <p>{tabel.date}</p>
                <Box>{
                    tabel.productsOfOrder.map((i,index)=>{
                    return <>
                    <Box key={index}>
                        <span>{i.name}/</span><span> quantity:{i.quantity }  /</span>
                         <span>price:{ +i.quantity * +i.prize}</span>
                        
                    </Box>
             </>
                    })
                    }
                </Box>
                

            </Box>  
            <div style={{padding:1,background:'yellow',}}>  <Typography variant="h5" sx={{textAlign:'center'}}>
                    Total:{tabel.price}</Typography> 
                </div>
            </Box>  
        )})}
    </Box>
    <Divider light />
    {dayOrder.map((tabel,index)=>{
            return (
                <>
                <Box>{
                    tabel.productsOfOrder.map((i,index ) =>{
                    return <>
                    <Box key={index}>
                                <span> {}-{i.name}/</span><span> quantity:{i.quantity }  /</span>
                                 <span>price:{ +i.quantity * +i.prize}</span>
                                
                            </Box>
                            {/* <Typography variant="h5" sx={{textAlign:'center'}}>
                    Total:{tabel.price}</Typography> */}
                            </>
                    })
                    }
                </Box>
                </>
            )})}
        
    </>
)
}