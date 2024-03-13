import useDatabase from '../../hooks/useDatabase';
import ThreeDGallery from '../../components/ThreeDGallery';

export default function Gallery () {
  const [images] = useDatabase();

  return (
    <div className="gallery container mt-6">
      <ThreeDGallery images={Object.values(images)} />
    </div>
  );
}