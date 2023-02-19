import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import Layout from "./layout"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/layout/Layout'
import theme from '@/theme'
import dynamic from "next/dynamic";





 function App({ Component, pageProps }: AppProps): JSX.Element |any{
  return   <ChakraProvider theme={theme} > <Layout> <Component {...pageProps} /> </Layout>  </ChakraProvider>
}
export default dynamic (() => Promise.resolve(App), {ssr: false})