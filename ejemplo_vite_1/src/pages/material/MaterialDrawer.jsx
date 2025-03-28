import Breadcrumb from "../../components/Breadcrumb";
import { matConstants } from "../../text";

import { useState } from "react";
//Contenedor
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
//Divisor
import Divider from '@mui/material/Divider';
//Elementos de List
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//Iconos
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const MaterialDrawer = () => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    //Método de la documentación
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    //Contiene el listado del Drawer, el Drawer está dentro de un Box
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem   disablePadding>
                    <ListItemButton onClick={()=>{console.log("home")}}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nosotros" />
                    </ListItemButton>
                </ListItem>
                 
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Servicios" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacto" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );
  return (
    <>
    <Breadcrumb link={matConstants.matLink} title={matConstants.matTitle} description={matConstants.matDrawerDescription}/>
        <div>
            <Button onClick={toggleDrawer('left', true)}>Abrir</Button>
          
            <Drawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </div>

    </>
  )
}

export default MaterialDrawer