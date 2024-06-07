import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex flex-row items-center space-x-12 space-y-12">
        <br></br>
        <div
          onClick={() => setCategory("Beach")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-100 hover:opacity-100`}
        >
          <Image
            src="/icon_category_beach.jpg"
            alt="Category - Beach"
            width={20}
            height={20}
          />
          <span className="text-sm"> Beach</span>
        </div>
        <div
          onClick={() => setCategory("Villas")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Villas" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-100 hover:opacity-100`}
        >
          <Image
            src="/icon_category_beach.jpg"
            alt="Category - Beach"
            width={20}
            height={20}
          />
          <span className="text-sm"> Villas</span>
        </div>
        <div
          onClick={() => setCategory("Cabins")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Cabins" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-100 hover:opacity-100`}
        >
          <Image
            src="/icon_category_beach.jpg"
            alt="Category - Beach"
            width={20}
            height={20}
          />
          <span className="text-sm"> Cabins</span>
        </div>

        <div
          onClick={() => setCategory("Tiny House")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Tiny House" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-100 hover:opacity-100`}
        >
          <Image
            src="/icon_category_beach.jpg"
            alt="Category - Beach"
            width={20}
            height={20}
          />
          <span className="text-sm"> Tiny Homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
