'use client'
import useSearchModal from "@/app/hooks/useSearchModasl";

const SearchFilters = () => {
  const searchModal = useSearchModal()
  return (
    <div
    onClick={() => searchModal.open('location')}
     className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[250px] h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold"> Where</p>
            <p className=" text-xs">Wanted location</p>
          </div>
          <div className="h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold"> Check in</p>
            <p className=" text-xs">Add dates</p>
          </div>
          <div className="h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold"> Check out</p>
            <p className=" text-xs">Add Dates</p>
          </div>
          <div className="h-[64px] justify-center px-8 flex flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Whot</p>
            <p className=" text-xs">Add guests</p>
          </div>
        </div>
      </div>
        <div className="p-2">
          <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark rounded-full transition text-white">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "currentcolor",
                strokeWidth: 4,
                overflow: "visible",
              }}
            >
              <path
                fill="none"
                d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
              ></path>
            </svg>
          </div>
        </div>
    </div>
  );
};

export default SearchFilters;
