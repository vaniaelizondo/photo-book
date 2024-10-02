import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Album from "./pages/Album";
import PhotoDetail from "./pages/PhotoDetail";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

const albums = [
  {
    id: 1,
    title: "Polas",
    photos: [
      {
        id: 1,
        src: "/images/album-1/image-1.jpeg",
      },
      {
        id: 2,
        src: "/images/album-1/image-2.jpeg",
      },
      {
        id: 3,
        src: "/images/album-1/image-3.jpeg",
      },
      {
        id: 4,
        src: "/images/album-1/image-4.jpeg",
      },
      {
        id: 5,
        src: "/images/album-1/image-5.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Fashion",
    photos: [
      {
        id: 1,
        src: "/images/album-2/image-1.jpeg",
      },
      {
        id: 2,
        src: "/images/album-2/image-2.jpeg",
      },
      {
        id: 3,
        src: "/images/album-2/image-3.jpeg",
      },
      {
        id: 4,
        src: "/images/album-2/image-4.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Commercial",
    photos: [
      {
        id: 1,
        src: "/images/album-3/image-1.jpeg",
      },
      {
        id: 2,
        src: "/images/album-3/image-2.jpeg",
      },
      {
        id: 3,
        src: "/images/album-3/image-3.jpeg",
      },
      {
        id: 4,
        src: "/images/album-3/image-4.jpeg",
      },
      {
        id: 5,
        src: "/images/album-3/image-5.jpeg",
      },
      {
        id: 6,
        src: "/images/album-3/image-6.jpeg",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery albums={albums} />} />
          <Route path="/gallery/:albumTitle" element={<Album albums={albums} />} />
          <Route path="/gallery/:albumTitle/:photoId" element={<PhotoDetail albums={albums} />} />
        </Routes>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
