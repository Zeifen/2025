import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // https://mui.com/material-ui/react-button/
import IconButton from '@mui/material/IconButton'; // https://mui.com/material-ui/icons/ 

import EditIcon from '@mui/icons-material/Edit'; // Los iconos hay que importarlos de manera individual ya que son componentes
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';

const MaterialButton = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material botones, iconos y stack
          </li>
        </ol>
      </nav>
      <hr />
      <h1>Material botones, iconos y stack</h1>
      <hr />
      {/* Ejemplos generales de botones en fila*/}
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained<EditIcon></EditIcon></Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <hr />
      {/* Ejemplos generales de botones en columna */}
      <Stack spacing={2} direction='column'>
        <Button >Primary</Button>
        <Button disabled>Disabled<EditIcon></EditIcon></Button>
        <Button href='#Link'>Link</Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction='row'>
        <Button variant='contained' disabled>Disabled<EditIcon></EditIcon></Button>
        <Button variant='contained' href='#containedButtons'>Link</Button>
        <Button variant='contained' disableElevation>Disable Elevation</Button>
        <Button variant='contained' >Normal Elevation</Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction='row'>
        <Button color='secondary' >Secondary</Button>
        <Button variant='contained' color='success'>Success</Button>
        <Button variant='outlined' color='error'>Error</Button>
      </Stack>
      <hr />
      {/* Icon Button se utiliza para hacer una letra o un icono en bóton, en este ejemplo de hizo con icono de fontawesome */}
      <Stack spacing={2} direction='row' alignItems='center'>
        <Button variant='contained' component='label' >Upload
          <input hidden accept='image/' multiple type='file'></input>
        </Button>
        <IconButton color='primary' aria-label='upload picture' component='label'>
          <i className='fas fa-camera-retro'></i>
          <input type="file" hidden accept='image/' />
        </IconButton>
      </Stack>
      <hr />
      <Stack spacing={2} direction='row'>
        {/* Ejemplos con iconos de Material UI (Ejemplo 1, llamando al componente de iconos) */}
        <Button variant='outlined' color='error'><DeleteForeverIcon></DeleteForeverIcon>Error</Button>
        {/* Ejemplos con iconos de Material UI (Ejemplo 2, llamando al componente de iconos en la prop startIcon) */}
        <Button variant='outlined' color='error' startIcon={<DeleteForeverIcon />}>Error</Button>
        <Button variant='outlined' color='success' startIcon={<SendIcon />}>Enviar</Button>
      </Stack>
      <hr />
      {/* Usando IconBotton con iconos de Material */}
      <Stack spacing={1} direction='row'>
      <IconButton  aria-label='delete'>
        <DeleteForeverIcon />
      </IconButton>
      <IconButton  aria-label='delete' disabled color='primary'>
        <DeleteForeverIcon />
      </IconButton>
      </Stack>
    </>
  )
}

export default MaterialButton;