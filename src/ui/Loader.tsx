const Loader = ({ size }: { size: number }) => {
  return (
    <div
      style={{ width: size, height: size, borderRadius: size / 2 }}
      className="inline-block animate-spin  border-[4px] border-current border-t-transparent text-indigo-600"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
