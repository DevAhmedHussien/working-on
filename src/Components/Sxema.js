import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link  } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
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
//icons
import IconButton from '@mui/material/IconButton';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import DeleteIcon from '@mui/icons-material/Delete';
//waiter
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:2,
    name:'table 2',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:3,
    name:'table 3',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:4,
    name:'table 4',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:5,
    name:'table 5',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:6,
    name:'table 6',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:7,
    name:'table 7',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:8,
    name:'table 8',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:9,
    name:'table 9',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    date:'',
    Comment:'',
    waiter:''
},
{
    key:uuidv4(),
    id:10,
    name:'table 10',
    reseved:false,
    open:false,
    openEdit:false,
    personName:'',
    number:0,
    time:'',
    date:'',
    Comment:'',
    waiter:''
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
console.log('date:',(date))
//time
const [time, setTime] = useState('');
console.log('time:',(time))
//comment 
const [comment, setComment]  = useState('')
const handleComment = (e) => {
        setComment(e.target.value);
};
//modal add recieve
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
// get from localstorage 
useEffect(()=>{
    if (localStorage.getItem('storageRecievedTable') !== null) {
        const data = JSON.parse(localStorage.getItem('storageRecievedTable')) 
        setTabels(data)
    }
    },[])
// waiter 
const [waiter, setWaiter] = useState('');
const handleChange = (event) => {
    setWaiter(event.target.value);
};
const Ok =(d)=>{
    const tabelsReseved = tabelss.map((table)=>{
        if(table.id === d.id){
            if( table.reseved == true){
                return {...table , personName :'', number:0,reseved:false,date:'',time:'',open : false,Comment:'',waiter:''}
                }else{
                    return {...table ,  personName : person, number:number,reseved:!table.reseved,date:(`${date}`).slice(0, 15),
                    time:(`${time}`).slice(15, 47)+')',open : false,Comment:comment,waiter:waiter
                    }
                }
            }
        return table;
    })
    setTabels(tabelsReseved)
    setPerson('')
    setNumber(0)
    setDate('')
    setTime('')
    setWaiter('')
    setComment('')
    localStorage.setItem('storageRecievedTable',JSON.stringify(tabelsReseved))
}
//modal 
        //  for editing 
const handleOpenEdit = (d) => {
        const tabelsReseved = tabelss.map((table)=>{
            if(table.id === d.id){
                if(table.id === d.id){
                    table.openEdit=!table.openEdit
                }
                return table;
            }
            return table;
        })
        setTabels(tabelsReseved)
    };
const [editRecieve,setEditRecieve] = useState({
    personName:'',
    number:'',
    date:'',
    time:'',
    Comment:'',
    waiter:'',
    
})    
const handlePersonResevedEditChange = (e) => {
    setEditRecieve({...editRecieve , personName:e.target.value});
}
const handleNumberPersonResevedEditChange = (e) => {
    setEditRecieve({...editRecieve , number:e.target.value});
}
const handleCommentEdit = (e) => {
    setEditRecieve({...editRecieve , Comment:e.target.value});
}
const handleSelect = (e) => {
    setEditRecieve({...editRecieve , waiter:e.target.value});
    };
const handleEditRecieve = (d) =>{
    console.log('d',d)
    const tabelsReseved = tabelss.map((table)=>{
        if(table.id === d.id){
            if( table.reseved == true){
                    return {...table ,  
                    personName : editRecieve.personName,
                    number:editRecieve.number,
                    date:(`${editRecieve.date}`).slice(0, 15),
                    time:(`${editRecieve.time}`).slice(15, 47)+')',
                    openEdit : false,
                    Comment:editRecieve.Comment,
                    waiter:editRecieve.waiter
                    }
                }
            else{
                alert('open table at the first ,then u can edit ')
            }
            }
        return table;
    })
    setTabels(tabelsReseved)
    setEditRecieve({
        personName:'',
        number:0,
        date:'',
        Comment:'',
        waiter:'',
    });
    localStorage.setItem('storageRecievedTable',JSON.stringify(tabelsReseved))
}
    const deleteRecieved =(d)=>{
        const tabelsReseved = tabelss.map((table)=>{
            if(table.id === d.id){
                if( table.reseved == true){
                    return {...table,personName:'',number:0,reseved:false,date:'',time:'',openEdit : false ,Comment:'',waiter:''}
                    }
                }
            return table;
        })
        setTabels(tabelsReseved)
        localStorage.setItem('storageRecievedTable',JSON.stringify(tabelsReseved))
        }
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
                        <Item sx={{height:230 ,borderRadius:2,textDecoration:'none',
                        background:_.reseved?'green':'silver'}} >
                                <h3>{_.name}</h3> 
                            <div style={{}}>
                                <p>name:{_.personName} ||| <span>number:{_.number}</span></p>
                                <p>comment : {_.Comment}</p>
                                <p>waiter : {_.waiter}</p>
                                <p> date: {_.date}</p>
                                <p> time: {_.time}</p>
                                
                            </div>
                        </Item>
                    </Link>
                    <Button  sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}} color='success'
                     onClick={()=>{
                        handleOpen(_)
                        }}>Form reseeve </Button>
                    <Button  sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}} 
                    onClick={()=>{handleOpenEdit(_)}} color='secondary'
                    >edit reseeve </Button>
                    <Button variant="outlined" color='error'
                sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}}
                    onClick={()=>{
                        deleteRecieved(_)
                    }}
                    >delete</Button>
                    
                </Grid>
            <div>
                {/* FOR RESEIVBNG TABLE  */}
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
                    <Typography variant='h3' >recieve table</Typography>
                    <TextField id="outlined-basic" label="person" variant="outlined"  value={person}
                    onChange={handlePersonResevedChange} />
                    <TextField id="outlined-basic"  label="number" variant="outlined"
                    value={number}
                    onChange={handleNumberPersonResevedChange} />
                    {/* comment */}
                    <TextField id="outlined-basic" label="Comment" variant="outlined"  value={comment}
                    onChange={handleComment} />
                    {/* waiter */}
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">waiter</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={waiter}
                            onChange={handleChange}
                            label="waiter"
                            >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Ruslan'}>Ruslan</MenuItem>
                            <MenuItem value={'sergey'}>sergey </MenuItem>
                            <MenuItem value={'ahmed'}>ahmed</MenuItem>
                        </Select>
                </FormControl>
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
            {/* for editing */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={_.openEdit}
                onClose={()=>{
                    handleOpenEdit(_)}}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
            <Fade in={_.openEdit}>
                <Box sx={style}>
                    <Typography variant='h3' >Edit table</Typography>
                    <TextField id="outlined-basic" label='person'// placeholder={_.personName} 
                     variant="outlined"   value={editRecieve.personName}
                    onChange={handlePersonResevedEditChange} />
                    <TextField id="outlined-basic"  label='number'// placeholder={_.number}
                     variant="outlined"
                    value={editRecieve.number}
                    onChange={handleNumberPersonResevedEditChange} />
                    {/* comment */}
                    <TextField id="outlined-basic" label='comment' // placeholder={_.Comment}
                     variant="outlined"  value={editRecieve.Comment}
                    onChange={handleCommentEdit} />
                    {/* waiter */}
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">waiter</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={editRecieve.waiter}
                            onChange={handleSelect}
                            label="waiter"
                            >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Ruslan'}>Ruslan</MenuItem>
                            <MenuItem value={'sergey'}>sergey </MenuItem>
                            <MenuItem value={'ahmed'}>ahmed</MenuItem>
                        </Select>
                </FormControl>
                    {/* date */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}    >
                        <DatePicker defaultValue={dayjs(date)}   onChange={ (date) =>{
                            // setDate(date.$d)
                        setEditRecieve({...editRecieve , date:date.$d});
                        }} />
                    </LocalizationProvider>
                    {/* ---------- */}
                    {/* time */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticTimePicker
                        defaultValue={dayjs(time)} onChange= {(time) =>{
                            // setTime(time.$d)
                            setEditRecieve({...editRecieve , time:time.$d});
                        }} />
                    </LocalizationProvider>
                    <Button variant="outlined" color='secondary'
                sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}}
                    onClick={()=>{
                        handleEditRecieve(_)
                    }}
                    >edit</Button>
                    <Button variant="outlined" color='error'
                sx={{width:150,height:30,fontSize:10 ,margin:'5px 0 20px 0'}}
                    onClick={()=>{
                        deleteRecieved(_)
                    }}
                    >delete</Button>
                     <IconButton color="secondary" aria-label="min"  
                            onClick={()=>{}}>
                                <IndeterminateCheckBoxIcon/>
                            </IconButton   >
                            <IconButton aria-label="add" 
                            onClick={()=>{}}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="add" 
                            onClick={()=>{
                                }}>
                                <ControlPointIcon />
                            </IconButton>
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