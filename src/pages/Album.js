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
import { CircularProgress } from '@mui/material';

const loadMediaWithDimensions = async (media) => {
  const promises = media.map(item => 
    new Promise((resolve) => {
      const mediaType = item.type || 'photo';

      if (mediaType === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.onloadedmetadata = () => {
          resolve({ 
            ...item, 
            type: 'video',
            width: video.videoWidth, 
            height: video.videoHeight,
            poster: item.poster || '',
            sources: [{ src: item.src }]
          });
        };
        video.onerror = () => {
          resolve({ 
            ...item,
            type: 'video',
            width: 640, 
            height: 360,
            poster: item.poster || '',
            sources: [{ src: item.src }]
          });
        };
      } else {
        const img = new Image();
        img.src = item.src;
        img.onload = () => resolve({ 
          ...item, 
          type: 'photo',
          width: img.width, 
          height: img.height 
        });
        img.onerror = () => resolve({ 
          ...item,
          type: 'photo',
          width: 640, 
          height: 480 
        });
      }
    })
  );
  return await Promise.all(promises);
};

const Album = ({ albums }) => {
  const { albumTitle } = useParams();
  const albumIndex = albums.findIndex((g) => slugify(g.title) === albumTitle);
  const [index, setIndex] = useState(-1);
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (albumIndex !== -1) {
      setLoading(true);
      loadMediaWithDimensions(albums[albumIndex].photos)
        .then(photos => {
          setAlbumPhotos(photos);
          setLoading(false);
        });
    }
  }, [albumIndex]);

  if (albumIndex === -1) return <h1>Album not found</h1>;

  // Prepare slides for Lightbox with correct format
  const slides = albumPhotos.map(item => {
    if (item.type === 'video') {
      return {
        type: 'video',
        width: item.width,
        height: item.height,
        src: item.src,
        poster: item.poster,
      };
    } else {
      return {
        type: 'image',
        width: item.width,
        height: item.height,
        src: item.src,
      };
    }
  });

  return (
    <div className="album-container">
      <AlbumsNavigationBar albums={albums} albumIndex={albumIndex} />
      {loading ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '200px' 
        }}>
          <CircularProgress color="neutral"/>
        </div>
      ) : (
        albumPhotos.length > 0 && (
          <RowsPhotoAlbum 
            photos={albumPhotos.map(item => ({
              ...item,
              src: item.type === 'video' ? (item.poster || item.src) : item.src
            }))}
            targetRowHeight={180} 
            onClick={({ index }) => setIndex(index)} 
            renderPhoto={({ photo, imageProps }) => (
              <div style={{ position: 'relative' }}>
                {photo.type === 'video' && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontSize: '2em',
                    zIndex: 1
                  }}>▶️</div>
                )}
                <img {...imageProps} />
              </div>
            )}
          />
        )
      )}
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
        render={{
          slide: ({ slide }) => {
            if (slide.type === 'video') {
              return (
                <video
                  controls
                  style={{ maxHeight: '100vh', maxWidth: '100%' }}
                  src={slide.src}
                  poster={slide.poster}
                />
              );
            }
            return null;
          }
        }}
      />
    </div>
  );
};

export default Album;
