import useDatabase from '../../hooks/useDatabase';
import ThreeDGallery from '../../components/ThreeDGallery';
import './Gallery.css';

export default function Gallery () {
  const [images] = useDatabase();

  return (
    <div className="gallery container">
      <ThreeDGallery images={Object.values(images)} />
    </div>
  );
}