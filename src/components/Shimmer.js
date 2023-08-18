const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap mx-auto justify-evenly -z-40 w-10/12  px-8 mt-10">
        {Array(9)
          .fill("")
          .map((index) => {
            return (
              <div
                key={index}
                className="min-h-72 w-[350px] my-10  hover:cursor-pointer "
              >
                <div className="h-48 w-[350px] object-cover rounded-xl bg-gray-200 animate-pulse"></div>
                <div>
                  <div className="h-5 rounded-lg bg-gray-200 mt-3 w-5/6"></div>
                  <div className="h-2 rounded-xl bg-gray-200 mt-3 w-2/4"></div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
