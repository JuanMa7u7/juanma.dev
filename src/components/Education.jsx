import { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { langContext } from "./context/langContext";

const Education = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const EDUCATION = [
        {
            name: LANGUAGE.messages["education.degree"],
            place: 'Instituto Tecnológico de León',
            // period: '2016 - 2020',
            professionalID: 13583320,
        },
        {
            name: 'Curso Básico de JavaScript',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1814-basico-javascript/diploma/detalle/'
        },
        {
            name: 'Curso Básico de PHP: Arreglos, Funciones y Estructuras de Control',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/2794-php-arreglos-funciones/diploma/detalle/'
        },
        {
            name: 'Curso Básico de PHP: Instalación, Fundamentos y Operadores',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/2646-php/diploma/detalle/'
        },
        {
            name: 'Curso Práctico de PHP',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/2516-php-practico/diploma/detalle/'
        },
        {
            name: 'Curso de Asincronismo con JavaScript',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1789-asincronismo-js/diploma/detalle/'
        },
        {
            name: 'Curso de Closures y Scope en JavaScript',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1807-scope/diploma/detalle/'
        },
        {
            name: 'Curso de ECMAScript 6+',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1815-ecmascript-6/diploma/detalle/'
        },
        {
            name: 'Curso de Frontend Developer',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/2467-frontend-developer/diploma/detalle/'
        },
        {
            name: 'Curso de Introducción a Java SE',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1631-java-basico/diploma/detalle/'
        },
        {
            name: 'Curso de JavaScript Engine (V8) y el Navegador',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1798-javascript-navegador/diploma/detalle/'
        },
        {
            name: 'Curso de PHP con Composer',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/2024-php-composer/diploma/detalle/'
        },
        {
            name: 'Curso de Programación Estructurada',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1450-programacion-estructurada/diploma/detalle/'
        },
        {
            name: 'Curso de Programación Orientada a Objetos: POO',
            place: 'Platzi',
            // period: 'Abril 2022',
            certificate: 'https://platzi.com/p/juan_ma7u7/curso/1474-oop/diploma/detalle/'
        },
    ];
    return (
        <Box id={id} ref={ref} className={CLASSES.section}>
            <Typography variant="h2" className={CLASSES.title}>{title}</Typography>
            {EDUCATION.map(({ name, place, period, professionalID, certificate }, index) => (
                <Box key={index} sx={{ flexGrow: 0.2, paddingBottom: '60px' }}>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography variant="h4" sx={{ color: 'var(--main-red)' }}>{name}</Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="h7">{period}</Typography>
                        </Grid>
                        <Grid size={8} sx={{ paddingBottom: '15px' }}>
                            <Typography variant="h5">{place}</Typography>
                        </Grid>
                        {typeof professionalID != 'undefined' ? (
                            <Grid size={8}>
                                <Typography variant="h5">{`${LANGUAGE.messages["education.professionalID"]}: ${professionalID}`}</Typography>
                            </Grid>
                        ) : null}
                        {typeof certificate != 'undefined' ? (
                            <Grid size={6}>
                                <Button variant="contained" sx={{ width: '180px' }} onClick={() => open(certificate)}>{LANGUAGE.messages["education.certificate"]}</Button>
                            </Grid>
                        ) : null}
                    </Grid>
                </Box>
            ))}
        </Box >
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        maxWidth: '70%',
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
}));

export default Education;