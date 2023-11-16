import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  useParams } from 'react-router-dom';
import {useEffect,useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { tableContext } from './context/ContextStates';
export default function OrderChek({productsOfOrder,setProductsOfOrder,handleChange,
price , handlePrice ,openTable}){
    const { dayOrder,setDorder}= useContext(tableContext)
    //ger id table 
    const {tableId} = useParams();
    //remove element from productOrder
    const handleRemove = (id) =>{
        const arr = productsOfOrder.filter((item)=>item.id !== id);//delete element from array
        setProductsOfOrder(arr);
        // localStorage.setItem(`${tableId}` ,JSON.stringify(
        //     {
        //         tableId:`${tableId}`,
        //         date:timeInMs,
        //         productsOfOrder,
        //         payment:false,
        //         price
        //     }
        // ))
        handlePrice();
    }
    //handle  i payed and send chek 
    const handleOrderDay = ()=>{
        setDorder([...dayOrder , {...openTable,payment:true}])
        let newDayOrder = [...dayOrder , {...openTable,payment:true}]
            localStorage.setItem('ordersTheDayOneDay',JSON.stringify(newDayOrder))
            setProductsOfOrder([])
            localStorage.removeItem(`${tableId}`);
    }
    console.log(dayOrder)
    //handle cancel Order
    const handleOrderCancel = ()=>{
        setProductsOfOrder([])
        localStorage.removeItem(`${tableId}`);
    }
    //handle price 
    useEffect(()=>{
        handlePrice();
    },)
    // get localstorage
    useEffect(()=>{
        if (localStorage.getItem(`${tableId}`) !== null) {
            const data = JSON.parse(localStorage.getItem(`${tableId}`)) ?? []; 
            if(data.productsOfOrder !== undefined ){
                setProductsOfOrder(data.productsOfOrder)
            }
        }
        },[])

    console.log('productsOfOrder:',productsOfOrder )
    console.log('dayOrder:',dayOrder)
    //try local
    const set = ()=>{
        // setDorder([...dayOrder , {...openTable,payment:true}])
        // let newDayOrder = [...dayOrder , {...openTable,payment:false}]
        //     localStorage.setItem('ordersTheDayOneDay',JSON.stringify(newDayOrder))
        localStorage.setItem(`${tableId}` ,JSON.stringify(openTable))
    }
return (
        <Box sx={{display:'flex' ,flexDirection:'column',gap:1 , height:"80vh", border:'1px solid black' , mt:1 ,borderRadius:2}}>
        <Typography variant='h4' sx={{textAlign:'center' , p :2}}>{tableId} </Typography>
            <Box sx={{ background:'wheat' , width:282, overflowY: 'scroll', scrollBehavior:'smooth',  mt:0 , borderRadius:2 ,p:2
            ,height:"70vh", display:'flex' ,flexDirection:'column',gap:1}}>
            {
            // data.length == null ?
            productsOfOrder.map((product)=>{
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
            <Box sx={{ display:'flex' ,p:1 , border:'2px solid silver' , borderRadius:2 , height:50,
            flexDirection:'column' , alignItems:'center' , gap:1}}>
                <Typography variant='p' sx={{textAlign:'center' , fontWeight:500}}>
                    Total Price of your Cart  :  {price}</Typography>
                <Box  sx={{ display:'flex' ,justifyContent:'space-evenly' , alignItems:'center'}}> 
                    <Button variant="contained" color="success"sx={{width:50,height:25,fontSize:11}}
                    onClick={handleOrderDay} 
                    >Pay</Button>
                    <Button variant="outlined" color="error" sx={{width:50,height:25,fontSize:11}}
                    onClick={handleOrderCancel}>Cancel</Button>
                    <Button variant="outlined" color="success" sx={{width:50,height:25,fontSize:11}}
                    onClick={set}
                    >Storage</Button>
                </Box>
            </Box>
        </Box>
)
}