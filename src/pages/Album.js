import { useParams, Link } from 'react-router-dom';
import { slugify } from "../utils";

const Album = ({ albums }) => {
  const { albumTitle } = useParams();
	console.log(albumTitle)
  const album = albums.find(g => slugify(g.title) === albumTitle);

  if (!album) return <h1>Album not found</h1>;

  return (
    <div className="sub-album-grid">
      {album.photos.map((photo) => (
        <div key={photo.id} className="photo-container">
          <Link to={`/gallery/${slugify(album.title)}/${photo.id}`}>
            <img src={photo.src} alt={photo.caption} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Album;
