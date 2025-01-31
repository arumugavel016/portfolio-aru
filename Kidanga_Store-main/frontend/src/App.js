import { Outlet } from 'react-router-dom';
import Header from './component/header.js';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice.js';
import { useDispatch } from 'react-redux';

// This is the index file

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await res.json();
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    })();

    // Adding new products directly
    const newProducts = [
      {
        _id: '1',
        name: 'Fresh Mango',
        price: 2.5,
        description: 'Juicy and ripe mangoes.',
        image: 'https://th.bing.com/th/id/R.9bfa05a6c93fe20997cbdf21f02180df?rik=3ZXyw3IJ9CSAEg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f5%2f1%2f1384173-download-mango-wallpaper-2560x1440-for-phone.jpg&ehk=lCsBFr%2fAdFtIXok2j3joRInET6YrqrtNYUPegDtWtOg%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        _id: '2',
        name: 'Organic Basmati Rice',
        price: 1.5,
        description: 'High-quality basmati rice.',
        image: 'https://example.com/path/to/rice-image.jpg',
      },
      {
        _id: '3',
        name: 'Chocolate Cake',
        price: 15.0,
        description: 'Delicious chocolate cake.',
        image: 'https://example.com/path/to/cake-image.jpg',
      },
    ];

    dispatch(setDataProduct(newProducts));
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="pt-14 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
