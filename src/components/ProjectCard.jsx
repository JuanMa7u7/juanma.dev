import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from "@mui/styles";
import { Box, Button, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import TechCards from './TechCards';


const ProjectCard = ({ project }) => {
    const CLASSES = useStyles();
    const { name, description, media, technologies, links } = project;
    return (
        // <Card sx={{ flexShrink: 0, float: 'left', marginRight: '15px', width: 350, backgroundColor: 'var(--secondary-black)', border: '1px solid var(--main-red)' }}>
        <Card sx={{ margin: '0px 15px 30px 15px', width: 350, backgroundColor: 'var(--secondary-black)', border: '1px solid var(--main-red)' }}>
            <CardMedia
                sx={{ height: 200 }}
                image={media}
                title={name}
            />
            <CardContent sx={{ height: 160 }}>
                <Typography gutterBottom variant="h7" sx={{ color: 'var(--main-red)' }} component="div">{name}</Typography>
                <Typography variant="body2" sx={{ color: 'var(--main-white)' }}>{description}</Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "center", paddingTop: '12px' }}>
                    {technologies.map((tech, index) => (
                        <TechCards key={index} tech={tech}></TechCards>
                    ))}
                </Stack>
            </CardContent>
            <CardActions className={CLASSES.cardActions}>
                <GitHubIcon onClick={() => open(links.repository)} />
                <LinkIcon onClick={() => open(links.web)} />
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        '& > svg': {
            width: '40px',
            height: 'auto',
            color: 'var(--main-red)',
            cursor: 'pointer',
        }
    }
}));

export default ProjectCard;