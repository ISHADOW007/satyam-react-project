import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import ResturantMenu from "./components/ResturantMenu.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { useEffect,useState} from "react";
// import Grocery from "./components/Grocery.js";

// chunking
//Code splitting
//Dynamic BunDling
//Lazy Loading
//on demand loading
//dynamix import
const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [userName,setUserName]=useState();
  // authentication
  useEffect(()=>{
    // Make an API call and send username and password
    const data ={
      name:"Akshay Saini",
    };
    setUserName(data.name);
  },[]);
  return (
    // Default value
    
   <UserContext.Provider value={{ loggedInUser: userName,setUserName}}>
    {/* wrapping the value of loggedInUser with userName for whole app now we can use it anywhere in app
     we can  also apply nested wrap
     Akshay saini */}
    <div className="app">
     {/* <UserContext.Provider value={{ loggedInUser: "Elon musk"}}>   
     Elon Musk  */}
    <Header />
    {/* </UserContext.Provider> */}
    <Outlet />
  </div>
  </UserContext.Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


