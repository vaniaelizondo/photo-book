import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, slugify } from "../utils";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { RiGalleryView2 } from "react-icons/ri";

const AlbumsNavigationBar = ({ albums, albumIndex }) => {
  const albumTitle = capitalizeFirstLetter(albums[albumIndex].title);
  const previousAlbumIndex = (albumIndex - 1 + albums.length) % albums.length;
  const nextAlbumIndex = (albumIndex + 1) % albums.length;
  const previousAlbumTitle = albums[previousAlbumIndex].title;
  const nextAlbumTitle = albums[nextAlbumIndex].title;

  return (
    <div className="navigation-bar">
      <h2>{albumTitle}</h2>
      <div className="navigation-bar-tools">
        <Link to={`/gallery/${slugify(previousAlbumTitle)}`} title={previousAlbumTitle}>
          <IoIosArrowDropleft />
        </Link>
        <Link to={`/gallery`} title="Gallery" className="center">
          <RiGalleryView2 />
        </Link>
        <Link to={`/gallery/${slugify(nextAlbumTitle)}`} title={nextAlbumTitle}>
          <IoIosArrowDropright />
        </Link>
      </div>
    </div>
  );
};

export default AlbumsNavigationBar;
