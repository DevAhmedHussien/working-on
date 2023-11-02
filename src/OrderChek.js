import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

let  timeInMs = new Date();

export default function OrderChek({productsOfOrder,setProductsOfOrder,
    handleChange,dayOrder,setDorder }){
    //ger id table 
    const {tableId} = useParams();
    const [price, setPrice] = useState(0);

    //handle Price
    const handlePrice = ()=>{
        let ans = 0;
        productsOfOrder.map((item)=>(
            ans += item.quantity * item.prize
        ))
        setPrice(ans);
    }
    //remove element from productOrder
    const handleRemove = (id) =>{
        const arr = productsOfOrder.filter((item)=>item.id !== id);//delete element from array
        setProductsOfOrder(arr);
        localStorage.setItem(`table-${tableId}` ,JSON.stringify(productsOfOrder))
        // handlePrice();
    }
    //handle  i payed and send chek 
    const handleOrderDay = ()=>{
        setDorder([...dayOrder , {
            id:uuidv4(),
            table :`table-${tableId}`,
            date:timeInMs,
            productsOfOrder,
            price,
            payment:false
        }])
            localStorage.setItem('ordersTheDayOneDay',JSON.stringify(dayOrder))
            setProductsOfOrder([])
            // localStorage.removeItem(`table-${tableId}`);
            // window.location.href = "/dashboard";
    }
    console.log(dayOrder)
    //handle cancel Order
    const handleOrderCancel = ()=>{
        setProductsOfOrder([])
        localStorage.removeItem(`table-${tableId}`);
    }
    //handle price 
    useEffect(()=>{
        handlePrice();
    },)
    // get localstorage
    useEffect(()=>{
        if (localStorage.getItem(`table-${tableId}`) !== null) {
            const data = JSON.parse(localStorage.getItem(`table-${tableId}`)) ?? []; 
            if(data.productsOfOrder !== undefined ){
                setProductsOfOrder(data.productsOfOrder)
            }
           
        }
        },[])

    console.log('productsOfOrder:',productsOfOrder )
    console.log('dayOrder:',dayOrder)
return (
    
        <Box sx={{display:'flex' ,flexDirection:'column',gap:1 , height:"80vh", border:'1px solid black' , mt:1 ,borderRadius:2}}>
        <Typography variant='h4' sx={{textAlign:'center' , p :2}}>Table #{tableId} </Typography>
            <Box sx={{ background:'wheat' , width:282, overflowY: 'scroll', scrollBehavior:'smooth',  mt:0 , borderRadius:2 ,p:2
            ,height:"70vh", display:'flex' ,flexDirection:'column',gap:1}}>
            {
            // data.length == null ?
            productsOfOrder.map((product)=>{
                return  (       
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
            <Box sx={{ display:'flex' ,p:1 , border:'2px solid silver' , borderRadius:2 , height:50,
            flexDirection:'column' , alignItems:'center' , gap:1}}>
                <Typography variant='p' sx={{textAlign:'center' , fontWeight:500}}>
                    Total Price of your Cart  :  {price}</Typography>
                <Box  sx={{ display:'flex' ,justifyContent:'space-evenly' , alignItems:'center'}}> 
                    <Button variant="contained" color="success"sx={{width:50,height:25,fontSize:11}}
                    onClick={handleOrderDay} //disabled ={ productsOfOrder.length > 0 ? false  : true  } 
                    >Pay</Button>
                    <Button variant="outlined" color="error" sx={{width:50,height:25,fontSize:11}}
                    onClick={handleOrderCancel}>Cancel</Button>
                </Box>
            </Box>
        </Box>
)
}