import React, { useState } from "react";
import { IntlProvider } from 'react-intl';
import MessagesEnglish from './../../lang/en-US.json';
import MessagesSpanish from './../../lang/es-MX.json';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    const [messages, setMessages] = useState(MessagesEnglish);
    const [locale, setLocale] = useState('en-US');

    const setLanguage = (language) => {
        switch (language) {
            case 'es-MX':
                setMessages(MessagesSpanish);
                setLocale('es-MX');

                break;

            case 'en-US':
                setMessages(MessagesEnglish);
                setLocale('en-US');
                break;

            default:
                setMessages(MessagesEnglish);
                setLocale('en-US');
        }
    };

    const getLanguage = () => locale;

    return (
        <langContext.Provider value={{ getLanguage, setLanguage, messages }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export { langContext, LangProvider };