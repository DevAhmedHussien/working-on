
    import { useState } from 'react';
    import PropTypes from 'prop-types';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import Typography from '@mui/material/Typography';
    import Box from '@mui/material/Box';
    import Product from './Product'
    import TextField from '@mui/material/TextField';
    import OrderChek from './OrderChek'
    import { v4 as uuidv4 } from 'uuid';
    import {  useParams } from 'react-router-dom';
  
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const timeInMs = date + ' ' + time;

    
    let pizza =  [{
            id:uuidv4(),
            name: "pizza margrita",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {
            id:uuidv4(),
            name: "pizza peporoni",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {
            id:uuidv4(),
            name: "pizza ostri",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {   
            id:uuidv4(),
            name: "pizza hamada",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {   
            id:uuidv4(),
            name: "pizza hamada",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {   
            id:uuidv4(),
            name: "pizza hamada",
            prize :10,
            img:'photo',
            quantity:1,
        },
    ];
    let  burger =[
        {
            id:uuidv4(),
            name: "BURGER margrita",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {
            id:uuidv4(),
            name: "BURGER peporoni",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {
            id:uuidv4(),
            name: "BURGER ostri",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {   
            id:uuidv4(),
            name: "BURGER hamada",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {   
            id:uuidv4(),
            name: "BURGER hamada",
            prize :10,
            img:'photo',
            quantity:1,
        },
        {   
            id:uuidv4(),
            name: "BURGER hamada",
            prize :10,
            img:'photo',
            quantity:1,
        },
    ]
    let  pasta =[
        {
            id:uuidv4(),
            name: "pasta margrita",
            prize :10,
            img:'photo',quantity:1,
        },
        {
            id:uuidv4(),
            name: "pasta peporoni",
            prize :10,
            img:'photo',quantity:1,
        },
        {
            id:uuidv4(),
            name: "pasta ostri",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "pasta hamada",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "pasta hamada",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "pasta hamada",
            prize :10,
            img:'photo',quantity:1,
        },
    ]
    let  steck= [
        {
            id:uuidv4(),
            name: "steck margrita",
            prize :10,
            img:'photo',quantity:1,
        },
        {
            id:uuidv4(),
            name: "steck peporoni",
            prize :10,
            img:'photo',quantity:1,
        },
        {
            id:uuidv4(),
            name: "steck ostri",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "steck hamada",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "steck hamada",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "steck hamada",
            prize :10,
            img:'photo',quantity:1,
        },
    ]
    let drink=[
        {
            id:uuidv4(),
            name: "drink margrita",
            prize :10,
            img:'photo',quantity:1,
        },
        {
            id:uuidv4(),
            name: "drink peporoni",
            prize :10,
            img:'photo',quantity:1,
        },
        {
            id:uuidv4(),
            name: "drink ostri",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "drink hamada",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "drink hamada",
            prize :10,
            img:'photo',quantity:1,
        },
        {   
            id:uuidv4(),
            name: "drink hamada",
            prize :10,
            img:'photo',quantity:1,
        },
    ]

    function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        > 
        {value === index && (
            <Box sx={{  p: 3 , display:'flex' , flexDirection:'column' ,height:'80vh' , overflowY:'scroll' //justifyContent:'center', alignItems:'center' 
            }}>
                <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center' }}>
                    <TextField label="Search " variant="standard"  sx={{width:250}}/>
                    {/* <div>icon</div> */}
                </Box>
            <Typography 
            sx={{ p: 3, bgcolor:'#eee', 
            display:'flex',height:'100vh',justifyContent:'center',alignItems:'center',
            flexWrap:'wrap' , gap:'20px'}}>{children}</Typography>
            </Box>
        )}
        </div>
        
    );
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
    }

export default function VerticalTabs({dayOrder , setDorder}) {
     const [productsOfOrder , setProductsOfOrder] = useState([])
     const [value, setValue] = useState(0);
     const {tableId} = useParams();
        
        const handleChanges = (event, newValue) => {
        setValue(newValue);
    };
    //add item to 
    const handleClick = (item)=>{
	setProductsOfOrder([...productsOfOrder, item]);
         localStorage.setItem(`${tableId}` ,JSON.stringify(
            {
            tableId:`${tableId}`,
            date:timeInMs,
            productsOfOrder,
            payment:false
        }
            ))
        }

	const handleChange = (item, d) =>{
		let ind = -1;
		productsOfOrder.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = productsOfOrder;
		tempArr[ind].quantity += d;
		
		if (tempArr[ind].quantity === 0)
			tempArr[ind].quantity = 1;
            setProductsOfOrder([...tempArr])
            localStorage.setItem(`${tableId}` ,JSON.stringify(
                {
                tableId:`${tableId}`,
                date:timeInMs,
                productsOfOrder,
                payment:false
            }
                ))
	}
console.log(tableId)
    return (
        <Box
        sx={{ flexGrow: 1, bgcolor: '#eee',
            display: 'flex', height: '90vh'}}
        >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChanges}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' , width:'350px' ,p:2 //, mt:2 //, height: '90vh' 
        }}
        >
            <Tab label="Pizza" {...a11yProps(0)} />
            <Tab label="Purger" {...a11yProps(1)} />
            <Tab label="Pasta" {...a11yProps(2)} />
            <Tab label="Steck" {...a11yProps(3)} />
            <Tab label="Soft Drink" {...a11yProps(4)} />
            <Tab label="Item Six" {...a11yProps(5)} />
            <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0} sx={{height:'100vh' , overflowY:'scroll'}}>
        {pizza.map((element)=>{
            return <div className='ok'>
                    <Product key={element.id} product={element} dayOrder={dayOrder} setDorder={setDorder}
                        handleClick={handleClick}  />
                    </div>
        })}
        </TabPanel>
        <TabPanel value={value} index={1}>
        {burger.map((element)=>{
            return <div className='ok'>
                        <Product key={element.id} product={element} dayOrder={dayOrder} setDorder={setDorder}
                        handleClick={handleClick}  />
                    </div>
        })}
        </TabPanel>
        <TabPanel value={value} index={2}>
        {pasta.map((element)=>{
            return <div className='ok'>
                        <Product key={element.id} product={element} dayOrder={dayOrder} setDorder={setDorder}
                        handleClick={handleClick}  />
                    </div>
        })}
        </TabPanel>
        <TabPanel value={value} index={3}>
        {steck.map((element)=>{
            return <div className='ok'>
                        <Product key={element.id} product={element} dayOrder={dayOrder} setDorder={setDorder}
                        handleClick={handleClick}  />
                    </div>
        })}
        </TabPanel>
        <TabPanel value={value} index={4}>
        {drink.map((element)=>{
            return <div className='ok'>
                        <Product key={element.id} product={element} dayOrder={dayOrder} setDorder={setDorder}
                        handleClick={handleClick}  />
                    </div>
        })}
        </TabPanel>
        <TabPanel value={value} index={5}>
            Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
            Item Seven
        </TabPanel>
        {/* <SearchAppBar/> */}
{/* here oreder  */}
        <OrderChek productsOfOrder={productsOfOrder} setProductsOfOrder={setProductsOfOrder}
        handleChange={handleChange} dayOrder={dayOrder} setDorder={setDorder}/>
    </Box>
    );
    }