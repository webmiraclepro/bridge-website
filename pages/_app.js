import '../styles/globals.css'
import 'rsuite/dist/rsuite.min.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
