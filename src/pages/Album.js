import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import AlbumsNavigationBar from '../components/AlbumsNavigationBar';
import { slugify } from "../utils";

const loadImagesWithDimensions = async (photos) => {
  const promises = photos.map(photo => 
    new Promise((resolve) => {
      const img = new Image();
      img.src = photo.src;
      img.onload = () => resolve({ ...photo, width: img.width, height: img.height });
    })
  );
  return await Promise.all(promises);
};

const Album = ({ albums }) => {
  const { albumTitle } = useParams();
  const albumIndex = albums.findIndex((g) => slugify(g.title) === albumTitle);
  const [index, setIndex] = useState(-1);
  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    if (albumIndex !== -1) {
      loadImagesWithDimensions(albums[albumIndex].photos).then(setAlbumPhotos);
    }
  }, [albumIndex]);

  if (albumIndex === -1) return <h1>Album not found</h1>;

  return (
    <div className="album-container">
      <AlbumsNavigationBar albums={albums} albumIndex={albumIndex} />
      {albumPhotos.length > 0 && (
        <RowsPhotoAlbum 
          photos={albumPhotos} 
          targetRowHeight={180} 
          onClick={({ index }) => setIndex(index)} 
        />
      )}
      <Lightbox
        slides={albumPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  );
};

export default Album;
