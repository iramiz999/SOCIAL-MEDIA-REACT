import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
const Posts = () => {

    const mycards = [
        {letter:"A",color:"purple",userName:"Ramiz",imagelink:"https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {letter:"N",color:"red",userName:"Emad",imagelink:"https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {letter:"M",color:"green",userName:"Siham",imagelink:"https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {letter:"A",color:"purple",userName:"Ramiz",imagelink:"https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=600"},

    ]
    return (
       <Box sx={{flexGrow:"3"}}>
        {mycards.map((item) => {
            return(
                <Card sx={{ maxWidth: {xs:"97%",sm:444} , mx:"auto" , my:5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor:item.color }} aria-label="recipe">
                      {item.letter}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.userName}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.imagelink}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  
                  
                </CardActions>
               
               </Card>

            )
          
        }
        )}
        
       </Box>
    );
}

export default Posts;
