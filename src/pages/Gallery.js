import { Link } from 'react-router-dom';
import { slugify } from "../utils";

const Gallery = ({ albums }) => {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <div key={album.id} className="photo-container">
          <Link to={`/gallery/${slugify(album.title)}`}>
            <img src={album.photos[0].src} alt={album.photos[0].caption} />
            <h2 className='caption'>{album.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;