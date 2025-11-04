import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";

import Loading from "./components/Loading/Loading";
import Layout from "./components/Layout/Layout";

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Faq = lazy(() => import("./pages/Faq/Faq"));
const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense element={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense element={<Loading />}>
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path="blog"
              element={
                <Suspense element={<Loading />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="faq"
              element={
                <Suspense element={<Loading />}>
                  <Faq />
                </Suspense>
              }
            />

            <Route
              path="projects"
              element={
                <Suspense element={<Loading />}>
                  <Projects />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense element={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
