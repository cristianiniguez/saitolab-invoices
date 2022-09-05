import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import AppProvider from './components/providers/AppProvider';
import AppServicesProvider from './components/providers/AppServicesProvider';
import MessagesProvider from './components/providers/MessagesProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MessagesProvider>
      <AppProvider>
        <AppServicesProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </AppServicesProvider>
      </AppProvider>
    </MessagesProvider>
  </React.StrictMode>,
);
