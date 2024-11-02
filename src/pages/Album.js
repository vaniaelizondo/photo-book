import { useParams, Link } from 'react-router-dom';
import { slugify } from "../utils";
import AlbumsNavigationBar from '../components/AlbumsNavigationBar';

const Album = ({ albums }) => {
  const { albumTitle } = useParams();
  const albumIndex = albums.findIndex((g) => slugify(g.title) === albumTitle);

  if (albumIndex === -1) return <h1>Album not found</h1>;

  const album = albums[albumIndex];

  return (
    <>
      <AlbumsNavigationBar albums={albums} albumIndex={albumIndex} />
      <div className="album-grid">
        {album.photos.map((photo) => (
          <div key={photo.id} className="album-item">
            <Link to={`/gallery/${slugify(album.title)}/${photo.id}`}>
              <img src={photo.src} alt={photo.caption} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Album;
