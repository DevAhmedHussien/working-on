import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link  } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const tabels = [{
    key:uuidv4(),
    id:1,
    name:'table 1',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:2,
    name:'table 2',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:3,
    name:'table 3',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:4,
    name:'table 4',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:5,
    name:'table 5',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:6,
    name:'table 6',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:7,
    name:'table 7',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:8,
    name:'table 8',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
},
{
    key:uuidv4(),
    id:9,
    name:'table 9',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    date:''
},
{
    key:uuidv4(),
    id:10,
    name:'table 10',
    reseved:false,
    open:false,
    personName:'',
    number:0,
    time:'',
    date:'',
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
    const [number ,setNumber] = useState(0)
    const [person ,setPerson] = useState('')
        //modal reseve setup
    const handlePersonResevedChange = (e) => {
        setPerson(e.target.value);
    }
    const handleNumberPersonResevedChange = (e) => {
        setNumber(e.target.value);
    }
        //date
        const [date, setDate] = useState('');
        // handles when user changes input in date inputfield
        const handleChangeDate = (e) => {
            setDate(e.target.value);
        };
        console.log('date:',(date))
        //time
        const [time, setTime] = useState('');
        console.log('time:',(time))
    const Ok =(d)=>{
        const tabelsReseved = tabelss.map((table)=>{
                if(table.id === d.id){
                    if( table.reseved == true){
                        table.personName =  ''
                        table.number=0
                        table.date= '' //(`${date}`).slice(0, 15)
                        table.time=''//(`${time}`).slice(15, 47)+')'
                        table.open = false
                        table.reseved=false
                    }else{
                        table.personName =  person
                        table.number=number
                        table.reseved=!table.reseved
                        table.date=(`${date}`).slice(0, 15)
                        table.time=(`${time}`).slice(15, 47)+')'
                        table.open = false
                        console.log(table)
                    }
                
                }
                return table;
            })
            setTabels(tabelsReseved)
            setPerson('')
            setNumber(0)
            setDate('')
            setTime('')
            localStorage.setItem('storageRecievedTable',JSON.stringify(tabelsReseved))
        }
        //modal 
        // const [open, setOpen] = useState(false);
        const handleOpen = (d) => {
            const tabelsReseved = tabelss.map((table)=>{
                if(table.id === d.id){
                    table.open=!table.open
                    console.log(table.open)
                }
                return table;
            })
            setTabels(tabelsReseved)
        };
        //wait handle close x

        // get from localstorage 
        useEffect(()=>{
            if (localStorage.getItem('storageRecievedTable') !== null) {
                const data = JSON.parse(localStorage.getItem('storageRecievedTable')) 
                setTabels(data)
            }
            },[])
return (
<>
<Box sx={{ flexGrow: 1 , mt : 8 , p: 5 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}
    sx={{display:'flex',justifyContent:'center',alignItems:'center'  , gap:5}}  >
        {tabelss.map((_ , index) => (
            <>
                <Grid 
                key={tabels.key} sx={{ width:350 }}  >
                    <Link to={`/order/table-${index+1}`}  >
                        <Item sx={{height:200 ,borderRadius:2,textDecoration:'none',
                        background:_.reseved?'green':'silver'}} >
                            <h4>{_.name}</h4>
                            <div>
                                <p>name:{_.personName} ||| <span>number:{_.number}</span></p>
                                <p> date: {_.date}</p>
                                <p> time: {_.time}</p>
                                
                            </div>
                        </Item>
                    </Link>
                    <Button onClick={()=>{handleOpen(_)}}>Form reseeve </Button>
                </Grid>
            <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={_.open}
                onClose={()=>{
                    handleOpen(_)}}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={_.open}>
                <Box sx={style}>
                <TextField id="outlined-basic" label="person" variant="outlined"  value={person}
                onChange={handlePersonResevedChange} />
                <TextField id="outlined-basic"  label="number" variant="outlined"
                value={number}
                onChange={handleNumberPersonResevedChange} />
                {/* date */}
                <LocalizationProvider dateAdapter={AdapterDayjs}    >
                    <DatePicker defaultValue={dayjs(date)}   onChange={ (date) =>{setDate(date.$d)}} />
                </LocalizationProvider>
                {/* ---------- */}
                {/* time */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticTimePicker
                    defaultValue={dayjs(time)} onChange= {(time) =>{setTime(time.$d)}} />
                </LocalizationProvider>
                <Button variant="outlined" color={_.reseved?'success':'secondary'} 
                sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}}
                    onClick={()=>{
                        Ok(_)
                    }}
                    >{ _.reseved ? 'delete reseved ' : 'reseeve' }</Button>
                </Box>
                </Fade>
            </Modal>
            </div>
        
            </>
        ))}
    </Grid>
</Box>
</>
);
}