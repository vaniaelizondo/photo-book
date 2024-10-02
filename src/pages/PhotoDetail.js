import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { slugify } from '../utils';

const PhotoDetail = ({ albums }) => {
  const { albumTitle, photoId } = useParams();
  const album = albums.find(g => slugify(g.title) === albumTitle);
  if (!album) return <h1>Album not found</h1>;

  const photo = album.photos.find(p => p.id === parseInt(photoId));
  if (!photo) return <h1>Photo not found</h1>;

  return (
    <div className="photo-detail">
      <div className="photo-wrapper">
        <img src={photo.src} alt={photo.caption} className="large-photo" />
      </div>
      <Link to={`/gallery/${slugify(album.title)}`} className="back-link">Back to {album.title}</Link>
    </div>
  );
};

export default PhotoDetail;
