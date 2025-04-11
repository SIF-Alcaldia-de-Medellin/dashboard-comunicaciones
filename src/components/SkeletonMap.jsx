const SkeletonMap = ({className}) => {
  return (
    <div className={`h-[400px] bg-gray-200 animate-pulse rounded-md relative overflow-hidden ${className}`}>
      {/* Simulación de los íconos/markers */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-gray-400 rounded-full"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonMap;
