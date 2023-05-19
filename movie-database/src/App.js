// Import Halaman Home
import Home from "./pages/Home";
// Import Routes dan Route dari React Router.
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";

function App() {
  /**
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      {/*
       * Setiap halaman dibungkus olah Layout.
       * Layout digunakan oleh setiap halaman yang dirender.
       */}
      <Layout>
        {/*
         * Membuat Routing.
         * Bungkus Routing menggunakan Routes.
         * Buat Routing menggunakan Route.
         */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
