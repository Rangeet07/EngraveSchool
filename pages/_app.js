import { ChakraProvider, extendTheme } from '@chakra-ui/react'
export const metadata = {
  title: {
    default: 'Engrave Tattoo School',
    template: "%s- Engrave Tattoo School"
  },
  description: 'Welcome to Engrave Tattoo School',
};

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
