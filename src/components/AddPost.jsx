import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { EmojiEmotions, Image, PersonAdd,  VideoCameraBack } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const AddPost = () => {

  const theme = useTheme()
  const [Isopen, setIsopen] = useState(false);
    return (
<>



<Tooltip title="Add Post">
    <Fab onClick={() => {
      setIsopen(true)
      
    }
    } color="primary"  sx={{position:"fixed" ,bottom:"20px",left:"22px"}}>
      <AddIcon />
    </Fab>
</Tooltip >


<Modal
sx={{}}
  open={Isopen}
  onClose={() => {
    setIsopen(false)
    
  }
  }
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{

    top:"50%",
    left:"50%",
    padding:"22px",
    borderRadius:"6px",
    

    
    
    
    position:"fixed",
    bgcolor:theme.palette.background.default ,
     width:{xs:"97%",sm:399},
     transform:"translate(-50%,-50%)"}}>
    <Typography sx={{textAlign:"center",mb :1.2}} variant="h6" component="h2">
      Create a Post
    </Typography>

    <Stack direction="row">
      <Avatar
      sx={{mr:"13px"}}
      src="https://images.pexels.com/photos/4859166/pexels-photo-4859166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
      />
      <Typography variant="body1" color="initial">Ramiz Zarzor</Typography>
    </Stack>
    <TextField
    sx={{width:"100%",mt:"22px"}}
          label="What is in your Mind..."
          multiline
          rows={4}
          variant="standard"
          
        />

        <Stack direction={"row"} spacing={1} my={3} >
          <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="success" />
          <PersonAdd color="error" />
        </Stack>

        <ButtonGroup variant="contained" sx={{width:"100%"}}>
  <Button sx={{flexGrow:1}}>Post</Button>
  <Button><CalendarMonthIcon /></Button>

</ButtonGroup>
  </Box>
</Modal>
</>

    );
}

export default AddPost;
