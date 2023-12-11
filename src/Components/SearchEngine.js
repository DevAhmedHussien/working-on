import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState , useEffect } from 'react';
import Product from './Product';
import {product} from './Page';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function SearchAppBar({ handleClick}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if(searchQuery.length > 0){
            const filteredProducts = Object.values(product).flatMap((category) =>
            category.filter((product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredData(filteredProducts);
    }
    else{
    setFilteredData([])
    }
},[searchQuery]);
  return (
    <Box  >
      <AppBar position="static" >
        <Toolbar sx={{display:'flex' , justifyContent:'center' ,bgcolor:'black'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value ={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <div style={{ display:"flex" , position: 'absolute', left : '0', zIndex:100,
      flexDirection:"column",alignItems:"start", 
      justifyContent :'center' ,
      backgroundColor:"#b58868",
    //   height:"100%",
      overflow:'scroll'
      
    }}>
            {filteredData.map((item) => (
                  <Product key={item.id} product={item}  handleClick={handleClick}  />
            ))}
        </div>
    </Box>
);
}