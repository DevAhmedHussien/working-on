import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function Dashboard (dayOrder,setDorder){
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
            // console.log(arr)
       }
    }
    },[])

    return(
        <>
            <Box sx={{ p:10 ,marginTop:'20px',display:'flex', flexWrap:'wrap', justifyContent:'center',gap:10}}>
                {x.map((tabel,index)=>{
                    return (
                       <Box key={index} 
                       sx={{height:400,background:'wheat',height:'380px',width:'300px',display:'flex',//overflowY:'scroll',
                       scroll:'smooth',
                       flexDirection:'column',alignItems:'center'
                       ,borderRadius:10,
                       position:'relative'
                       }}>
                           <h1>{tabel.tableId}</h1>
                           <p>{tabel.date}</p>
                           <Box>{
                               tabel.productsOfOrder.map((i,index)=>{
                               return <Box key={index}>
                                           <span>{i.name}</span><span>- {i.quantity }  - </span> <span>- {i.prize}  - </span>
                                       </Box>
                               })
                               }</Box>
                               <hr/>
                            <Box sx={{  position:'absolute' , bottom:10}}>
                                <Button variant="contained" color="success" sx={{width:50,height:25,fontSize:11}}>
                                    Success
                                </Button>
                                <Button variant="outlined" color="error" sx={{width:50,height:25,fontSize:11}}>
                                    Error
                                </Button>
                            </Box>
                       </Box>   
                )})}
            </Box>
            {/* <Box sx={{ display:'flex' ,p:1 , border:'2px solid silver' , borderRadius:2 , height:50,
            flexDirection:'column' , alignItems:'center' , gap:1}}>
                <Typography variant='p' sx={{textAlign:'center' , fontWeight:500}}>
                    Total Price of your Cart :</Typography>
                <Box  sx={{ display:'flex' ,justifyContent:'space-evenly' , alignItems:'center'}}> 
                    <Button variant="contained" color="success"sx={{width:50,height:25,fontSize:11}}
                    >Pay</Button>
                    <Button variant="outlined" color="error" sx={{width:50,height:25,fontSize:11}}>Cancel</Button>
                </Box>
            </Box> */}
        </>
    )
}