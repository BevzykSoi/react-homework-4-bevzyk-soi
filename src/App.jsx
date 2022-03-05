import { lazy, Suspense } from "react";
import { TailSpin } from 'react-loader-spinner';

const Routes = lazy(() => import("components/Routes/Routes"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));

const App = () => {
  return (
    <>

      <Suspense fallback={<TailSpin
        heigth="100"
        width="100"
        color="#ce0b0b"
        ariaLabel="loading"
        wrapperClass="loader"
      />}>
        <Navbar />

        <Routes />
      </Suspense>
    </>
  );
}

export default App;