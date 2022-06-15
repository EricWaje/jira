import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';

interface Props {
   children: ReactNode;
   title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Head>
            <title>{title}</title>
         </Head>
         <Navbar />
         <Sidebar />
         <Box sx={{ p: '10px 20px' }}>{children}</Box>
      </Box>
   );
};
