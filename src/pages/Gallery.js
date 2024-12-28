import { Link } from 'react-router-dom';
import { slugify } from "../utils";

const Gallery = ({ albums }) => {
  return (
    <div className="gallery-grid">
      {albums.map((album) => (
        <div key={album.id} className="gallery-item">
          <Link to={`/gallery/${slugify(album.title)}`}>
            <img 
              src={album.cover} 
              alt={album.title} 
            />
            <h2 className='gallery-caption'>{album.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
