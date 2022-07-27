import { Box } from "@mui/system";
import Head from "next/head"
import { FC } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, title}) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <main>
        <Box 
          display='flex' 
          alignItems='center' 
          justifyContent='center' 
          height='calc(100vh - 100px)'
        >
          { children }
        </Box>
      </main>

    </>
  )
}