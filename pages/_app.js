import '../styles/globals.css'
import GuestLayout from '../components/Layout/GuestLayout'

function MyApp({ Component, pageProps }) {

  return (
    <GuestLayout >
      <Component {...pageProps} />

    </GuestLayout>
  )
}

export default MyApp
