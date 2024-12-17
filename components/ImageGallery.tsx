import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
  isOpen: boolean;  // Controls lightbox visibility
  onClose: () => void; // Callback to close the lightbox
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isOpen, onClose }) => {
  const slides = images.map((src) => ({ src })); // Convert image URLs to lightbox-compatible format

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      plugins={[Thumbnails]} // Optional thumbnail navigation plugin
    />
  );
};

export default ImageGallery;
