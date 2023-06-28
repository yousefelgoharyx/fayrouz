import Loader from "../../../ui/Loader";

const loading = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Loader size={56} />
    </div>
  );
};

export default loading;
