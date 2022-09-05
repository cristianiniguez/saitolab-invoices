import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { VStack } from '@chakra-ui/react';
import useFormatMessage from '../../hooks/useFormatMessage';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title: pageTitle }) => {
  const t = useFormatMessage();
  const appName = t('app.name');
  const titleToShow = pageTitle ? t('app.title', { name: appName, pageTitle }) : appName;

  return (
    <>
      <Helmet>
        <title>{titleToShow}</title>
      </Helmet>

      <VStack as='main' minH='100vh'>
        {children}
      </VStack>
    </>
  );
};

export default Layout;
