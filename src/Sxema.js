import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link  } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
    let tabels = [{
    id:1,
    name:'table 1'
},
{
    id:2,
    name:'table 2'
},
{
    id:3,
    name:'table 4'
},
{
    id:4,
    name:'table 4'
},
{
    id:5,
    name:'table 5'
},
{
    id:6,
    name:'table 6'
},
{
id:7,
name:'table 7'
},
{
id:8,
name:'table 8'
},
{
id:9,
name:'table 9'
},
{
id:10,
name:'table 10'
    }]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

export default function Sxema() {
    
return (
    <Box sx={{ flexGrow: 1 , mt : 8   }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
        {tabels.map((_ , index) => (
            <Grid xs={2} sm={4} md={4}  key={index}>
                <Link to={`/order/${index+1}`}  >
                    <Item sx={{height:100 ,borderRadius:2,textDecoration:'none'}}>{_.name}</Item>
                </Link>
            </Grid>
        ))}
    </Grid>
</Box>
);
}