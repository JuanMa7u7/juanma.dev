import { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid, Link, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { langContext } from "./context/langContext";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Portfolio = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.up('xs'));
    const PROJECTS = [
        {
            name: 'Fatrian ERP',
            description: LANGUAGE.messages["portfolio.fatrian.description"],
            media: '/img/erp.jpg',
            technologies: ['html5', 'css3', 'js', 'jquery', 'php', 'mysql'],
            links: {
                repository: '',
                web: 'https://subelo.mx/fatrian/index.php?est=1&db=fatrian'
            }
        },
        {
            name: 'BajioNet Web 2.0',
            description: LANGUAGE.messages["portfolio.bajionet.description"],
            media: '/img/banbajio.jpg',
            technologies: ['html5', 'bootstrap', 'js', 'react', 'c++', 'sqlserver',],
            links: {
                repository: '',
                web: 'https://bancaporinternet.bb.com.mx/'
            }
        },
        {
            name: 'Shifra Spa',
            description: LANGUAGE.messages["portfolio.shifra.description"],
            media: '/img/shifra-spa.jpg',
            technologies: ['html5', 'ts', 'tailwind', 'nextjs', 'supabase', 'aws'],
            links: {
                repository: '',
                web: 'https://shifra-spa.com/'
            }
        },
    ];
    return (
        <Box id={id} ref={ref} className={CLASSES.section} sx={{ maxWidth: !isXS ? '90%' : '100%' }}>
            <Typography variant={isXS ? "h3" : "h2"} className={CLASSES.title}>{title}</Typography>
            <Grid direction='row' size="auto" className={CLASSES.cardContainer}>
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project}></ProjectCard>
                ))}
            </Grid>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        maxWidth: '90%',
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        color: 'var(--main-red)',
        paddingTop: '160px',
        paddingBottom: '80px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}));

export default Portfolio;