import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { AccountBox, Article, DarkMode, Group, Home, LightMode, Person, Settings, Storefront } from "@mui/icons-material";

const Mylist = ({setmyMOde,theme}) => {
    const mylist = [
        {title:"Home",icon:<Home />},
        {title:"Pages",icon:<Article />},
        {title:"Groups",icon:<Group />},
        {title:"MarketPlace",icon:<Storefront />},
        {title:"Friends",icon:<Person />},
        {title:"Settings",icon:<Settings />},
        {title:"Profile",icon:<AccountBox />},


    ]
    return (
        <Box sx={{flexGrow:"1.1" , display:{xs:"none",md:"block"} }}>
            <List sx={{position:"fixed"}}>
                {mylist.map((item) => {
                    return(
                        <ListItem key={item.title} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            {item.icon}
                           </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem> 



                    )
                  
                }
                )}

<ListItem>
        <ListItemIcon>
          
          
          {theme.palette.mode ==="dark"?<DarkMode />:<LightMode />}
        </ListItemIcon>
        <ListItemText  primary={theme.palette.mode} />




        <Switch
          edge="end"
          onChange={() => {
            localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
    
                  setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
                }}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>


           
            </List>

        </Box>
    );
}

export default Mylist;
