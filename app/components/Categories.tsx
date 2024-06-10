"use client";
import Image from "next/image";
import { useState } from "react";
import SearchModal, { SearchQuery } from "./modals/SearchModal";
import useSearchModal from "../hooks/useSearchModasl";

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      numGuests: searchModal.query.guests,
      numBedrooms: searchModal.query.bedrooms,
      numBathrooms: searchModal.query.bathrooms,
      checkInDate: searchModal.query.checkIn,
      checkOutDate: searchModal.query.checkOut,
      category: _category,
    };

    searchModal.setQuery(query);
  };
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == ''? 'border-black': 'border-white'} opacity-60 hover:border-gray-100 hover:opacity-100`}
      >
        <Image
          src="/icon_category_beach.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />
        <span className="text-sm">All</span>
      </div>

      <div
        onClick={() => _setCategory("Beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'Beach'? 'border-black': 'border-white'} opacity-60 hover:border-gray-100 hover:opacity-100`}
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
        onClick={() => _setCategory("Villas")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'Villas'? 'border-black': 'border-white'} opacity-60 hover:border-gray-100 hover:opacity-100`}
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
        onClick={() => _setCategory("Cabins")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'Cabins'? 'border-black': 'border-white'} opacity-60 hover:border-gray-100 hover:opacity-100`}
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
        onClick={() => _setCategory("Tiny Homes")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'Tiny Homes'? 'border-black': 'border-white'} opacity-60 hover:border-gray-100 hover:opacity-100`}
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
  );
};

export default Categories;
