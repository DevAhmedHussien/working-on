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
import moment from 'moment';

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
    const handlePersonResevedChange = (e) => {
        setPerson(e.target.value);
    }
    const handleNumberPersonResevedChange = (e) => {
        setNumber(e.target.value);
    }
    const Ok =(d)=>{
        const tabelsReseved = tabels.map((table)=>{
                if(table.id === d.id){
                    table.personName =  person
                    table.number=number
                    table.reseved=!table.reseved
                    console.log(table)
                }
                return table;
            })
            setTabels(tabelsReseved)
            setPerson('')
            setNumber(0);
        }
        //modal 
        // const [open, setOpen] = useState(false);
        const handleOpen = (d) => {
            const tabelsReseved = tabels.map((table)=>{
                if(table.id === d.id){
                    table.open=!table.open
                    console.log(table)
                }
                return table;
            })
            setTabels(tabelsReseved)
        };
        //date
            const [date, setDate] = useState(
                moment(new Date()).format("'MMMM Do YYYY, h:mm:ss a'")
            );
            
            // handles when user changes input in date inputfield
            const handleChangeDate = e => {
                setDate(e.target.value);
            };
        
        console.log(date)
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
                        <Item sx={{height:100 ,borderRadius:2,textDecoration:'none',
                        background:_.reseved?'green':'silver'}} >
                            <h4>{_.name}</h4>
                            <div>
                                <p>name:{_.personName} ||| <span>number:{_.number}</span></p>
                                <p>{_.date}</p>
                                
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
                <TextField
                    name="date"
                    id="date"
                    label="Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={date}
                    onChange={handleChangeDate}
                    fullWidth
                    required
                />
                {/* ---------- */}
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