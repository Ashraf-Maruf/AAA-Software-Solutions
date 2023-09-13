import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { CirclesWithBar } from 'react-loader-spinner'
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App flex justify-center items-center min-h-screen bg-primary">
      <>
        {
          loading ?
            <CirclesWithBar
              height="100"
              width="100"
              color="#000000"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
            />
            :
            <div className=' w-full'>
              <RouterProvider router={router}></RouterProvider>
            </div>
        }
      </>


    </div>
  );
}

export default App;
