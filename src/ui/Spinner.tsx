const Spinner = ({ size }: { size: number }) => {
  return (
    <div
      style={{ width: size, height: size, borderRadius: size / 2 }}
      className={`flex animate-pulse items-center justify-center overflow-hidden  border-2 border-neutral-100 duration-75 `}
    >
      <div className="h-[70%] w-[70%] animate-pulse rounded-[50%] bg-neutral-400"></div>
    </div>
  );
};

export default Spinner;
