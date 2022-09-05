import { FirebaseOptions } from 'firebase/app';
import { FC, ReactNode } from 'react';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
};

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <FirebaseAppProvider firebaseConfig={firebaseConfig}>{children}</FirebaseAppProvider>;
};

export default AppProvider;
