import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header';
import routesConfig from '@routes/routesConfig';
import styles from './App.module.css';


function App() {
  return (
    <>
        <div className={styles.wrapper}>
          <Header/>
          {routesConfig.map((route, index) => (
              <Routes key={index}>
                  <Route
                    path = {route.path}
                    element = {<route.element/>}
                  />
              </Routes>
          ))}
        </div>  
      
    </>    
  );
}

export default App;
