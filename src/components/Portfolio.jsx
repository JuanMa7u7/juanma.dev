import { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid, Link, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { langContext } from "./context/langContext";

const Portfolio = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const PROJECTS = [
        {
            name: 'Sonic Infinite Scroller',
            description: LANGUAGE.messages["portfolio.sonic.description"],
            media: 'https://wallpapers.com/images/hd/sonic-the-hedgehog-background-sgnmn0jnujp51041.jpg',
            technologies: ['html5', 'css3', 'js', 'nodejs', 'graphql', 'firebase'],
            links: {
                // repository: 'https://github.com/JuanMa7u7/sonic-infinite-scroller-game',
                repository: '',
                web: ''
            }
        },
        {
            name: 'Yu-Gi-Oh Library',
            description: LANGUAGE.messages["portfolio.yugioh.description"],
            media: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5eb6d278-e8cb-4062-b892-d47f24b6e699/d544zz5-85449ac5-170a-4609-a2d2-4b0acc2f329b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVlYjZkMjc4LWU4Y2ItNDA2Mi1iODkyLWQ0N2YyNGI2ZTY5OVwvZDU0NHp6NS04NTQ0OWFjNS0xNzBhLTQ2MDktYTJkMi00YjBhY2MyZjMyOWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.do0G0jFv5UNQYx1hBAwYLH6V61LtNq9vr1CL6zDgTng',
            technologies: ['html5', 'css3', 'ts', 'nextjs', 'material-ui',],
            links: {
                repository: '',
                web: ''
            }
        },
    ];
    return (
        <Box id={id} ref={ref} className={CLASSES.section}>
            <Typography variant="h2" className={CLASSES.title}>{title}</Typography>
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
    }
}));

export default Portfolio;