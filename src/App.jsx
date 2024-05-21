import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;



// import { Link } from "react-router-dom";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Layout from "./Layout";
// // import HomePage from "./HomePage";
// // import ListPage from "./ListPage";
// // import SinglePage from "./SinglePage";
// // import Login from "./Login";
// // import Register from "./Register";
// // import RequireAuth from "./RequireAuth";
// // import ProfilePage from "./ProfilePage";
// // import ProfileUpdatePage from "./ProfileUpdatePage";
// // import NewPostPage from "./NewPostPage";
// // import { listPageLoader, singlePageLoader, profilePageLoader } from "./loaders";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <HomePage />,
//         },
//         {
//           path: "/list",
//           element: <ListPage />,
//           loader: listPageLoader,
//         },
//         {
//           path: "/:id",
//           element: <SinglePage />,
//           loader: singlePageLoader,
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
//         {
//           path: "/register",
//           element: <Register />,
//         },
//       ],
//     },
//     {
//       path: "/",
//       element: <RequireAuth />,
//       children: [
//         {
//           path: "/profile",
//           element: <ProfilePage />,
//           loader: profilePageLoader,
//         },
//         {
//           path: "/profile/update",
//           element: <ProfileUpdatePage />,
//         },
//         {
//           path: "/add",
//           element: <NewPostPage />,
//         },
//       ],
//     },
//   ]);

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/list">List</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/profile/update">Update Profile</Link></li>
//           <li><Link to="/add">New Post</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/register">Register</Link></li>
//         </ul>
//       </nav>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;