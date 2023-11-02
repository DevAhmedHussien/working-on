    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { Button, CardActionArea, CardActions } from '@mui/material';
    export default function Product({product ,handleClick}) {
// console.log(product)
    let handleClickProduct =  ()=>{
            handleClick(product)
    }
    return (
        <>
        <Card sx={{ width: 220 ,height: 300 , borderRadius:5}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {product.name}
                    { product.prize}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button size="small" color="primary" onClick={handleClickProduct}>
            put : {product.quantity}
                </Button>
                

            </CardActions>
        </Card>
        
</>
    );
    }