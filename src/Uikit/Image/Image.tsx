import ImagePlaceholder from '../../assets/img/imagePlaceholder.jpg';

interface CustomImage {
  src: string;
  alt?: string;
  className?: string;
}

const CustomImage = ({ src, alt = '', className = '' }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(e: any) => {
        e.target.src = ImagePlaceholder;
      }}
    />
  );
};

export default CustomImage;
