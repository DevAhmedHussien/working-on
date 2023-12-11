import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  useParams } from 'react-router-dom';
import {useEffect,useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { tableContext } from '../context/ContextStates';

export default function OrderChek({productsOfOrder,setProductsOfOrder,handleChange,price , handlePrice ,openTable,setOpenTabel}){
    const { dayOrder,setDorder}= useContext(tableContext)
    const [open,setOpen] = useState(false)
    //ger id table 
    const {tableId} = useParams();
    const A = useParams();
    //remove element from productOrder
    const handleRemove = (id) =>{
        const arr = productsOfOrder.filter((item)=>item.id !== id );//delete element from array
        setProductsOfOrder(arr);
        handlePrice();
    }
        const handleOrderDay = (tableClick)=>{
        alert(tableClick.tableId)
        if(dayOrder.length != 0){
            const setData = dayOrder.map((table)=>{
            if(table.tableId === tableClick.tableId  && table.payment === false  ){
                return {...table , payment:true};
            }else{
                return table
            } 
        })
        setDorder(setData)
        localStorage.setItem('ordersTheDayOneDay',JSON.stringify(setData))
        setProductsOfOrder([])
        }
    }
    //handle price 
    useEffect(()=>{
        handlePrice();
    },)
    useEffect(()=>{
       if (localStorage.getItem('ordersTheDayOneDay') !== null) {
            const data = JSON.parse(localStorage.getItem('ordersTheDayOneDay')) ?? []; 
            const filteredObjects = data.filter(table => table.payment === false && table.tableId === tableId  );
            if(filteredObjects[0]  !== undefined ){
                console.log('data',filteredObjects[0])
            setOpenTabel(filteredObjects[0])
            setProductsOfOrder(filteredObjects[0].productsOfOrder)
            }
        }
        },[]) 
    // console.log('open table orderCheck',openTable)
    // console.log('open table orderCheck for product',productsOfOrder)
    const set = ()=>{ 
        setDorder([...dayOrder ,{...openTable , productsOfOrder:productsOfOrder,price:price }])
        let newDayOrder = [...dayOrder ,{...openTable , productsOfOrder:productsOfOrder,price:price }]
        localStorage.setItem('ordersTheDayOneDay',JSON.stringify(newDayOrder))
    }
    const upgrade =(tableClick)=>{ //
          console.log('table click', tableClick )
           if(tableClick.productsOfOrder.length != 0){
            const setData = dayOrder.map((table)=>{
                if(table.tableId === tableClick.tableId  && table.payment === false  ){
                    return {...table , productsOfOrder:productsOfOrder,price:price ,payment:false};
                }else{
                       return table;
                }
            })
            setDorder(setData)
            localStorage.setItem('ordersTheDayOneDay',JSON.stringify(setData))
           }
    }
    console.log('set',dayOrder)
    return (
    <>
        <Box sx={{width:'400px', display:'flex' ,flexDirection:'column',gap:1 , height:"88vh", border:'1px solid black' , mt:1 ,borderRadius:2}}>
        <Typography variant='h4' sx={{textAlign:'center' , p :2}}>{tableId} </Typography>
            <Box sx={{  background:'wheat' ,width:'400px', overflowY: 'scroll', scrollBehavior:'smooth',  mt:0 , borderRadius:2 ,p:2
            ,height:"70vh", display:'flex' ,flexDirection:'column',gap:1}}>
            {productsOfOrder.map((product)=>{
                return (       
                <Box sx={{ display:'flex' ,flexDirection:'column' , p:1 , border:'2px solid silver' , borderRadius:2}}>
                    <Box sx={{ display:'flex' , flexDirection:'column' ,alignItems:'center'}}>
                        <Typography variant='p'> {product.name} : {product.quantity }</Typography>
                        <Box sx={{ display:'flex' , justifyContent:'center' ,alignItems:'center'}}>
                            <IconButton color="secondary" aria-label="min"  
                            onClick={()=>handleChange(product, -1)}>
                                <IndeterminateCheckBoxIcon/>
                            </IconButton   >
                            <IconButton aria-label="add" 
                            onClick={()=>{
                                handleChange(product, +1)
                            }
                            }>
                                <ControlPointIcon />
                            </IconButton>
                            <IconButton aria-label="add" 
                            onClick={()=>{
                                handleRemove(product.id)
                            }
                            }>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography  variant='p' sx={{textAlign:'center'}}>prize : { product.prize * product.quantity }$ </Typography>
                </Box>)
                })
                } 
            </Box>
            <Box sx={{ display:'flex' ,p:1 , //border:'2px solid silver' , borderRadius:2 ,
             height:50,
            flexDirection:'column' , alignItems:'center' , gap:1}}>
                <Typography variant='p' sx={{textAlign:'center' , fontWeight:500}}>
                    Total Price of your Cart  :  {price}</Typography>
                <Box  sx={{ display:'flex' ,justifyContent:'space-evenly' , alignItems:'center'  , gap:1}}> 
                <Button variant="outlined" color="success" sx={{width:120,height:25,fontSize:11}} 
                    onClick={()=>{set(openTable)
                    setOpen(true)}}  disabled={productsOfOrder.length == 0 ? open : productsOfOrder.length != 0 ? true : false}
                    >open table</Button>
                    <Button variant="outlined" color="secondary" sx={{width:70,height:25,fontSize:11}}  disabled={productsOfOrder.length == 0 ? true :false}
                    onClick={()=>{upgrade(openTable)
                      }}
                    >upgrade</Button>
                    <Button variant="contained" color="error"sx={{width:70,height:25,fontSize:11}}
                    onClick={()=>{handleOrderDay(openTable)}}  disabled={productsOfOrder.length == 0 ? true :false}
                    >Pay</Button>
                </Box>
            </Box>
        </Box>
    </>
)
}