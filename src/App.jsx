import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routesArr } from './routes';
import Header from './components/layout/header';
import Footer from "./components/layout/footer"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Header />
                <item.component />
                <Footer/>
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
