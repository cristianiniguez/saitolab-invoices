import { FC, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import messages_es from '@/i18n/es.json';

type MessagesProviderProps = {
  children: ReactNode;
};

const messages: { [key: string]: Record<string, string> } = { es: messages_es };
const language = navigator.language.split(/[-_]/)[0];
const defaultLocale = 'es';

const MessagesProvider: FC<MessagesProviderProps> = ({ children }) => {
  return (
    <IntlProvider locale={language} messages={messages[language] || messages[defaultLocale]}>
      {children}
    </IntlProvider>
  );
};

export default MessagesProvider;
