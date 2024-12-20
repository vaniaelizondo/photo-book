import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Album from "./pages/Album";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

const albums = [
  {
    id: 1,
    title: 'Edito',
    photos: [
      {
        id: 1,
        src: "/images/Edito/01.jpg",
      },
      {
        id: 2,
        src: "/images/Edito/02.jpg",
      },
      {
        id: 3,
        src: "/images/Edito/03.jpg",
      },
      {
        id: 4,
        src: "/images/Edito/04.jpg",
      },
      {
        id: 5,
        src: "/images/Edito/05.jpg",
      },
      {
        id: 6,
        src: "/images/Edito/06.jpg",
      },
      {
        id: 7,
        src: "/images/Edito/07.jpg",
      },
      {
        id: 8,
        src: "/images/Edito/08.jpg",
      },
      {
        id: 9,
        src: "/images/Edito/09.jpg",
      },
      {
        id: 10,
        src: "/images/Edito/10.jpg",
      },
      {
        id: 11,
        src: "/images/Edito/11.jpg",
      },
      {
        id: 12,
        src: "/images/Edito/12.jpg",
      },
      {
        id: 13,
        src: "/images/Edito/13.jpg",
      },
      {
        id: 14,
        src: "/images/Edito/14.jpg",
      },
      {
        id: 15,
        src: "/images/Edito/15.jpg",
      },
      {
        id: 16,
        src: "/images/Edito/16.jpg",
      },
      {
        id: 17,
        src: "/images/Edito/17.jpg",
      },
      {
        id: 18,
        src: "/images/Edito/18.jpg",
      },
      {
        id: 19,
        src: "/images/Edito/19.jpg",
      },
    ],
  },
  {
    id: 2,
    title: 'Fashion show',
    photos: [
      {
        id: 1,
        src: "/images/Fashion show/01.jpg",
      },
      {
        id: 2,
        src: "/images/Fashion show/02.jpg",
      },
      {
        id: 3,
        src: "/images/Fashion show/03.png",
      },
      {
        id: 4,
        src: "/images/Fashion show/04.jpg",
      },
      {
        id: 5,
        src: "/images/Fashion show/05.jpg",
      },
      {
        id: 6,
        src: "/images/Fashion show/06.jpg",
      },
      {
        id: 7,
        src: "/images/Fashion show/07.jpg",
      },
      {
        id: 8,
        src: "/images/Fashion show/08.jpg",
      },
      {
        id: 9,
        src: "/images/Fashion show/09.jpg",
      },
      {
        id: 10,
        src: "/images/Fashion show/10.jpg",
      },
      {
        id: 11,
        src: "/images/Fashion show/11.jpg",
      },
      {
        id: 12,
        src: "/images/Fashion show/12.jpg",
      },
      {
        id: 13,
        src: "/images/Fashion show/13.png",
      },
      {
        id: 14,
        src: "/images/Fashion show/14.mov",
        type: "video",
        poster: "/images/Fashion show/14.jpg"
      },
      {
        id: 15,
        src: "/images/Fashion show/15.mov",
        type: "video",
        poster: "/images/Fashion show/15.jpg"
      },
    ],
  },
  {
    id: 3,
    title: 'Make up',
    photos: [
      {
        id: 1,
        src: "/images/Make up/01.jpg",
      },
      {
        id: 2,
        src: "/images/Make up/02.jpg",
      },
      {
        id: 3,
        src: "/images/Make up/03.jpg",
      },
      {
        id: 4,
        src: "/images/Make up/04.jpg",
      },
      {
        id: 5,
        src: "/images/Make up/05.jpg",
      },
      {
        id: 6,
        src: "/images/Make up/06.jpg",
      },
      {
        id: 7,
        src: "/images/Make up/07.jpg",
      },
      {
        id: 8,
        src: "/images/Make up/08.jpg",
      },
      {
        id: 9,
        src: "/images/Make up/09.jpg",
      },
      {
        id: 10,
        src: "/images/Make up/10.jpg",
      },
      {
        id: 11,
        src: "/images/Make up/11.png",
      },
      {
        id: 12,
        src: "/images/Make up/12.jpg",
      },
      {
        id: 13,
        src: "/images/Make up/13.jpg",
      },
      {
        id: 14,
        src: "/images/Make up/14.jpg",
      },
      {
        id: 15,
        src: "/images/Make up/15.jpg",
      },
      {
        id: 16,
        src: "/images/Make up/16.jpg",
      },
      {
        id: 17,
        src: "/images/Make up/17.jpg",
      },
      {
        id: 18,
        src: "/images/Make up/18.jpg",
      },
      {
        id: 19,
        src: "/images/Make up/19.jpg",
      },
    ],
  },
  {
    id: 4,
    title: 'Polas',
    photos: [
      {
        id: 1,
        src: "/images/Polas/01.jpg",
      },
      {
        id: 2,
        src: "/images/Polas/02.jpg",
      },
      {
        id: 3,
        src: "/images/Polas/03.png",
      },
      {
        id: 4,
        src: "/images/Polas/04.jpg",
      },
    ],
  },
  {
    id: 5,
    title: 'Portrait',
    photos: [
      {
        id: 1,
        src: "/images/Portrait/01.jpg",
      },
      {
        id: 2,
        src: "/images/Portrait/02.jpg",
      },
      {
        id: 3,
        src: "/images/Portrait/03.jpg",
      },
      {
        id: 4,
        src: "/images/Portrait/04.jpg",
      },
      {
        id: 5,
        src: "/images/Portrait/05.jpg",
      },
      {
        id: 6,
        src: "/images/Portrait/06.jpeg",
      },
      {
        id: 7,
        src: "/images/Portrait/07.jpeg",
      },
      {
        id: 8,
        src: "/images/Portrait/08.jpg",
      },
      {
        id: 9,
        src: "/images/Portrait/09.jpg",
      },
      {
        id: 10,
        src: "/images/Portrait/10.jpg",
      },
    ],
  },
  {
    id: 6,
    title: 'Publication',
    photos: [
      {
        id: 1,
        src: "/images/Publication/01.jpg",
      },
      {
        id: 2,
        src: "/images/Publication/02.jpg",
      },
      {
        id: 3,
        src: "/images/Publication/03.png",
      },
      {
        id: 4,
        src: "/images/Publication/04.png",
      },
      {
        id: 5,
        src: "/images/Publication/05.png",
      },
      {
        id: 6,
        src: "/images/Publication/06.png",
      },
      {
        id: 7,
        src: "/images/Publication/07.png",
      },
      {
        id: 8,
        src: "/images/Publication/08.png",
      },
      {
        id: 9,
        src: "/images/Publication/09.jpg",
      },
      {
        id: 10,
        src: "/images/Publication/10.jpg",
      },
      {
        id: 11,
        src: "/images/Publication/11.jpg",
      },
      {
        id: 12,
        src: "/images/Publication/12.png",
      },
    ],
  },
  {
    id: 7,
    title: 'Studio',
    photos: [
      {
        id: 1,
        src: "/images/Studio/01.jpg",
      },
      {
        id: 2,
        src: "/images/Studio/02.jpg",
      },
      {
        id: 3,
        src: "/images/Studio/03.jpg",
      },
      {
        id: 4,
        src: "/images/Studio/04.jpg",
      },
      {
        id: 5,
        src: "/images/Studio/05.jpg",
      },
      {
        id: 6,
        src: "/images/Studio/06.jpg",
      },
      {
        id: 7,
        src: "/images/Studio/07.jpg",
      },
      {
        id: 8,
        src: "/images/Studio/08.jpg",
      },
      {
        id: 9,
        src: "/images/Studio/09.jpg",
      },
      {
        id: 10,
        src: "/images/Studio/10.jpeg",
      },
      {
        id: 11,
        src: "/images/Studio/11.jpeg",
      },
      {
        id: 12,
        src: "/images/Studio/12.jpeg",
      },
      {
        id: 13,
        src: "/images/Studio/13.jpeg",
      },
      {
        id: 14,
        src: "/images/Studio/14.jpg",
      },
      {
        id: 15,
        src: "/images/Studio/15.jpg",
      },
      {
        id: 16,
        src: "/images/Studio/16.jpg",
      },
      {
        id: 17,
        src: "/images/Studio/17.jpg",
      },
      {
        id: 18,
        src: "/images/Studio/18.jpg",
      },
      {
        id: 19,
        src: "/images/Studio/19.jpg",
      },
      {
        id: 20,
        src: "/images/Studio/20.jpg",
      },
      {
        id: 21,
        src: "/images/Studio/21.jpg",
      },
      {
        id: 22,
        src: "/images/Studio/22.jpg",
      },
      {
        id: 23,
        src: "/images/Studio/23.jpg",
      },
      {
        id: 24,
        src: "/images/Studio/24.jpg",
      },
      {
        id: 25,
        src: "/images/Studio/25.jpg",
      },
      {
        id: 26,
        src: "/images/Studio/26.jpg",
      },
      {
        id: 27,
        src: "/images/Studio/27.jpg",
      },
      {
        id: 28,
        src: "/images/Studio/28.jpg",
      },
      {
        id: 29,
        src: "/images/Studio/29.jpg",
      },
      {
        id: 30,
        src: "/images/Studio/30.jpg",
      },
      {
        id: 31,
        src: "/images/Studio/31.jpg",
      },
      {
        id: 32,
        src: "/images/Studio/32.jpg",
      },
      {
        id: 33,
        src: "/images/Studio/33.jpg",
      },
      {
        id: 34,
        src: "/images/Studio/34.jpg",
      },
      {
        id: 35,
        src: "/images/Studio/35.jpg",
      },
      {
        id: 36,
        src: "/images/Studio/36.jpg",
      },
      {
        id: 37,
        src: "/images/Studio/37.jpg",
      },
      {
        id: 38,
        src: "/images/Studio/38.jpg",
      },
      {
        id: 39,
        src: "/images/Studio/39.jpg",
      },
      {
        id: 40,
        src: "/images/Studio/40.jpg",
      },
      {
        id: 41,
        src: "/images/Studio/41.jpg",
      },
      {
        id: 42,
        src: "/images/Studio/42.jpg",
      },
      {
        id: 43,
        src: "/images/Studio/43.jpg",
      },
      {
        id: 44,
        src: "/images/Studio/44.jpg",
      },
      {
        id: 45,
        src: "/images/Studio/45.jpg",
      },
      {
        id: 46,
        src: "/images/Studio/46.jpg",
      },
      {
        id: 47,
        src: "/images/Studio/47.jpg",
      },
      {
        id: 48,
        src: "/images/Studio/48.jpg",
      },
    ],
  },
  {
    id: 8,
    title: 'Underwater',
    photos: [
      {
        id: 1,
        src: "/images/Underwater/01.jpg",
      },
      {
        id: 2,
        src: "/images/Underwater/02.jpg",
      },
      {
        id: 3,
        src: "/images/Underwater/03.jpg",
      },
      {
        id: 4,
        src: "/images/Underwater/04.jpg",
      },
      {
        id: 5,
        src: "/images/Underwater/05.jpg",
      },
      {
        id: 6,
        src: "/images/Underwater/06.jpg",
      },
      {
        id: 7,
        src: "/images/Underwater/07.jpg",
      },
      {
        id: 8,
        src: "/images/Underwater/08.jpg",
      },
      {
        id: 9,
        src: "/images/Underwater/09.jpg",
      },
    ],
  },
  {
    id: 9,
    title: 'Videos',
    photos: [
      {
        id: 1,
        src: "/images/Videos/01.mp4",
        type: "video",
        poster: "/images/Videos/01.jpg"
      },
      {
        id: 2,
        src: "/images/Videos/02.mp4",
        type: "video",
        poster: "/images/Videos/02.jpg"
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
