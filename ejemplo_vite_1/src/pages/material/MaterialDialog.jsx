import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { matConstants } from "../../text";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MaterialDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAbrir = () => {
        alert("cualquier cosa");
    };
  return (
    <>
    <Breadcrumb link={matConstants.matLink} title={matConstants.matTitle} description={matConstants.matDialogDescription}/>
          <Button variant="outlined" onClick={handleClickOpen}>
              Abrir confirmar
          </Button>
          <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
          >
              <DialogTitle>{"¿Alguna pregunta?"}</DialogTitle>
              <DialogContent >
                  <DialogContentText  style={{ textAlign: "center"}} id="alert-dialog-slide-description">
                      Acá puedes poner cualquier texto con contenido html <strong>negritas</strong>.
                      <br/>
                      <img src="/vite.svg" alt="" style={{ padding: "10px" }}/>
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose}>Cancelar</Button>
                  <Button onClick={handleAbrir}>Agregar</Button>
              </DialogActions>
          </Dialog>
    </>
  )
}

export default MaterialDialog;