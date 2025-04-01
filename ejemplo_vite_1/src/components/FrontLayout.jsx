import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ProviderExample } from '../context/ProviderExample'; //importamos provider

const FrontLayout = () => {
  return (
    <>
      <ProviderExample>
        <Header />
        <main className="container">
        <Outlet />
        </main>
        <Footer />
      </ProviderExample>
    </>
  )
}

export default FrontLayout;