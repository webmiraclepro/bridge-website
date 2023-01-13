import '../styles/globals.css'
import 'rsuite/dist/rsuite.min.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
