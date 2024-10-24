import { useParams, Link } from 'react-router-dom';
import { slugify } from "../utils";

const Album = ({ albums }) => {
  const { albumTitle } = useParams();
  const album = albums.find(g => slugify(g.title) === albumTitle);

  if (!album) return <h1>Album not found</h1>;

  return (
    <div className="album-grid">
      {album.photos.map((photo) => (
        <div key={photo.id} className="album-item">
          <Link to={`/gallery/${slugify(album.title)}/${photo.id}`}>
            <img src={photo.src} alt={photo.caption} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Album;
