import { createTheme, ThemeProvider, CssBaseline, Stack, Typography, Divider } from "@mui/material";
import { useMemo,  useState } from "react";
import getDesignTokens from "./styles/myTheme.jsx";
import Appbar from "components/Appbar.jsx";
import Mylist from "components/Mylist.jsx";
import Posts from "components/Posts.jsx";
import AddPost from "components/AddPost.jsx";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  
  

  return (

        <ThemeProvider theme={theme}>
                <CssBaseline />


                <Appbar />

<Stack
 divider={<Divider orientation="vertical" flexItem />}
sx={{flexDirection:"row"}}>
 

  <Mylist 
  {...{setmyMOde,theme}}
  
   />

<Posts />



  <Typography sx={{flexGrow:"2"}} >BOX2</Typography>

</Stack>


<AddPost />

   




 


      
    </ThemeProvider>
  );
}

export default App;
