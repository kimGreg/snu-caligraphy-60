

interface ArtworkCardProps {
  imageUrl: string;
  title: string;
  writer: string;
}

export default function ArtworkCard({ imageUrl, title, writer }: ArtworkCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative w-full h-64">
            <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy" // Lazy loading attribute for better performance
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end p-4">
            <div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white">{writer}</p>
            </div>
            </div>
        </div>
    </div>
  );
}