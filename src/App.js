import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Album from "./pages/Album";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import i18n from './i18n';

const albums = [
  {
    id: 1,
    title: i18n.t('albums.album_1'),
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
      {
        id: 6,
        src: "/images/album-1/image-6.jpeg",
      },
      {
        id: 7,
        src: "/images/album-1/image-7.jpeg",
      },
      {
        id: 8,
        src: "/images/album-1/image-8.jpeg",
      },
      {
        id: 9,
        src: "/images/album-1/image-9.jpeg",
      },
      {
        id: 10,
        src: "/images/album-1/image-10.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: i18n.t('albums.album_2'),
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
    title: i18n.t('albums.album_3'),
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
      {
        id: 7,
        src: "/images/album-3/image-7.jpeg",
      },
      {
        id: 8,
        src: "/images/album-3/image-8.jpeg",
      },
      {
        id: 9,
        src: "/images/album-3/image-9.jpeg",
      },
      {
        id: 10,
        src: "/images/album-3/image-10.jpeg",
      },
      {
        id: 11,
        src: "/images/album-3/image-11.jpeg",
      },
      {
        id: 12,
        src: "/images/album-3/image-12.jpeg",
      },
      {
        id: 13,
        src: "/images/album-3/image-13.jpeg",
      },
      {
        id: 14,
        src: "/images/album-3/image-14.jpeg",
      },
      {
        id: 15,
        src: "/images/album-3/image-15.jpeg",
      },
      {
        id: 16,
        src: "/images/album-3/image-16.jpeg",
      },
      {
        id: 17,
        src: "/images/album-3/image-17.jpeg",
      },
      {
        id: 18,
        src: "/images/album-3/image-18.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: i18n.t('albums.album_4'),
    photos: [
      {
        id: 1,
        src: "/images/album-2/image-4.jpeg",
      },
      {
        id: 2,
        src: "/images/album-2/image-1.jpeg",
      },
      {
        id: 3,
        src: "/images/album-2/image-3.jpeg",
      },
      {
        id: 4,
        src: "/images/album-2/image-2.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: i18n.t('albums.album_5'),
    photos: [
      {
        id: 1,
        src: "/images/album-1/image-4.jpeg",
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
        src: "/images/album-1/image-1.jpeg",
      },
      {
        id: 5,
        src: "/images/album-1/image-5.jpeg",
      },
    ],
  },
  {
    id: 6,
    title: i18n.t('albums.album_6'),
    photos: [
      {
        id: 1,
        src: "/images/album-3/image-2.jpeg",
      },
      {
        id: 2,
        src: "/images/album-3/image-1.jpeg",
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
        </Routes>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
