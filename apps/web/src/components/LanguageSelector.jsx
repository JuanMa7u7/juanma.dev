import { useContext } from 'react';
import { langContext } from './context/langContext';
import { makeStyles } from "@mui/styles";
import { Stack } from '@mui/material';

const LanguageSelector = () => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    return (
        <Stack
            direction="row"
            spacing={1}
            className={CLASSES.languageMenu}
        // sx={{ position: !isXS ?? 'absolute' }}
        >
            <div
                className={`${CLASSES.languageMenuIcons} ${LANGUAGE.getLanguage() === 'es-MX' ? 'red-text' : ''}`}
                onClick={() => LANGUAGE.setLanguage('es-MX')}
            >
                Esp
            </div>
            <div
                className={`${CLASSES.languageMenuIcons} ${LANGUAGE.getLanguage() === 'en-US' ? 'red-text' : ''}`}
                onClick={() => LANGUAGE.setLanguage('en-US')}
            >
                Eng
            </div>
        </Stack>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'var(--main-black)',
        color: 'var(--main-white)'
    },
    content: {
        // marginLeft: '310px',
    },
    languageMenu: {
        width: 'fit-content',
        zIndex: 1,
        justifyContent: "flex-end",
        padding: '15px',
    },
    languageMenuIcons: {
        // width: '50px',
        height: 'auto',
        cursor: 'pointer',
        userSelect: 'none'
    }
}));

export default LanguageSelector;