import { ChakraProvider, extendTheme } from '@chakra-ui/react'


export default function App({ Component, pageProps }) {
  return (
<ChakraProvider
theme={extendTheme({
  fonts: {
    body: `"Bebas Neue", sans-serif`
  }
})}
>
<Component {...pageProps} />

</ChakraProvider>

  );
}
