import Breadcrumb from "../../components/Breadcrumb";
import { matConstants } from "../../text";
//Se crea componente de Breadcrumb, ya que este siempre lo estamos usando
import { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const MaterialList = () => {

    const [ open, setOpen ] = useState();

    const handleClick = () => {
        setOpen(!open);
    }

    const handleMenu = () => {
        alert('mail');
    }

  return (
    <>
        <Breadcrumb link={matConstants.matLink} title={matConstants.matTitle} description={matConstants.matListDescription}/>
        <List 
          sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} component="nav" aria-labelledby="nested-list-subheader" subheader={<ListSubheader component="div" id="nested-list-subheader">
            Título o encabezado
          </ListSubheader>}
          >
            <ListItemButton onClick={handleMenu}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Enviar E-Mail" />
            </ListItemButton>
            <ListItemButton>
                  <ListItemIcon>
                      <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Borradores" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                      <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bandeja de entrada" />
                  {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                              <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Destacados" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                              <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Archivados" />
                      </ListItemButton>
                </List>
              </Collapse>
          </List>
    </>
  );
};

export default MaterialList;
