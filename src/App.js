import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/video/VideoContainer";
import WatchPage from "./components/watch-page/WatchPage";
import SearchPage from "./components/search/SearchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VideoContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="box-border bg-white">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
