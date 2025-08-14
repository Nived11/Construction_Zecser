import { GalleryHeading } from "../../features/admin-gallery";
import { AddPhotoForm } from "../../features/admin-gallery";

const Gallery = () => {
  return (
     <div className="p-4 bg-[#F9F8FD] shadow-md rounded-lg ">
     <GalleryHeading />
     <AddPhotoForm />
    </div>
  )
}

export default Gallery
