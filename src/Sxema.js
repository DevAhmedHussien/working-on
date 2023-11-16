import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link  } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const tabels = [{
    key:uuidv4(),
    id:1,
    name:'table 1',
    reseved:false
},
{
    key:uuidv4(),
    id:2,
    name:'table 2',
    reseved:false
},
{
    key:uuidv4(),
    id:3,
    name:'table 3',
    reseved:false
},
{
    key:uuidv4(),
    id:4,
    name:'table 4',
    reseved:false
},
{
    key:uuidv4(),
    id:5,
    name:'table 5',
    reseved:false
},
{
    key:uuidv4(),
    id:6,
    name:'table 6',
    reseved:false
},
{
    key:uuidv4(),
    id:7,
    name:'table 7',
    reseved:false
},
{
    key:uuidv4(),
    id:8,
    name:'table 8',
    reseved:false
},
{
    key:uuidv4(),
    id:9,
    name:'table 9',
    reseved:false
},
{
    key:uuidv4(),
    id:10,
    name:'table 10',
    reseved:false
    }]

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
export default function Sxema() {
    const [tabelss,setTabels] = useState(tabels)
    const handleClick =(d)=>{
        const tabelsReseved = tabels.map((table)=>{
                if(table.id === d.id){
                    table.reseved=!table.reseved
                }
                return table;
            })
            setTabels(tabelsReseved)
        }
return (
<Box sx={{ flexGrow: 1 , mt : 8 , p: 5 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}
    sx={{display:'flex',justifyContent:'center',alignItems:'center'  , gap:5}}  >
        {tabelss.map((_ , index) => (
            <>
                <Grid //xs={1} sm={3} md={3}  
                key={tabels.key} sx={{ width:350 }}  >
                    <Link to={`/order/table-${index+1}`}  >
                        <Item sx={{height:100 ,borderRadius:2,textDecoration:'none',
                        background:_.reseved?'green':'silver'}} >{_.name}</Item>
                    </Link>
                <Button variant="outlined" color={_.reseved?'success':'secondary'} 
                sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}}
                    onClick={()=>{
                        handleClick(_)
                    }}
                    >{ _.reseved ? 'delete reseved ' : 'reseeve' }</Button>
                </Grid>
            </>
        ))}
    </Grid>
</Box>
);
}