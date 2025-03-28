import  { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { matConstants } from "../../text";
import { images } from "../../data/data.jsx";


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const MaterialCard = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
  return (
    <>
    <Breadcrumb link={matConstants.matLink} title={matConstants.matTitle} description={matConstants.matCardDescription}/>
          {(() => {
              let rows = [];
              for (let i = 1; i <= images.length; i++) { //Se mandó a llamar images para obtener las imagenes de una data, se dejó en For porque así estaba el ejemplo
                  rows.push(
                    <div style={{textAlign: '-webkit-center'}} key={i}>
                      <Card key={i} sx={{ maxWidth: 345 }}>
                          <CardHeader
                              avatar={
                                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                      R
                                  </Avatar>
                              }
                              action={
                                  <IconButton aria-label="settings">
                                      <MoreVertIcon />
                                  </IconButton>
                              }
                              title="Shrimp and Chorizo Paella"
                              subheader="September 14, 2016"
                          />
                          <CardMedia
                              component="img"
                              height="194"
                              image={images[i - 1].nombre}
                              alt="Paella dish"
                          />
                          <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                {images[i - 1].description}
                              </Typography>
                          </CardContent>
                          <CardActions disableSpacing>
                              <IconButton aria-label="add to favorites">
                                  <FavoriteIcon />
                              </IconButton>
                              <IconButton aria-label="share">
                                  <ShareIcon />
                              </IconButton>
                              <ExpandMore
                                  expand={expanded}
                                  onClick={handleExpandClick}
                                  aria-expanded={expanded}
                                  aria-label="show more"
                              >
                                  <ExpandMoreIcon />
                              </ExpandMore>
                          </CardActions>
                          <Collapse in={expanded} timeout="auto" unmountOnExit>
                              <CardContent>
                                  <Typography paragraph>Method:</Typography>
                                  <Typography paragraph>
                                    {images[i - 1].longDescription}
                                  </Typography>
                              </CardContent>
                          </Collapse>
                      </Card>
                      </div>
                    );
                }
              return rows;
          })()}
    </>
  )
}

export default MaterialCard;