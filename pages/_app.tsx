import type { AppProps } from 'next/app'
import { Container } from '@material-ui/core'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import '../styles/index.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return <Container fixed>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

  </Container>
}
export default MyApp
