"use client";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModasl";
import Modal from "./Modal";
import { Range } from "react-date-range";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import DatePicker from "../forms/Caledar";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SearchModal = () => {
  const searchModal = useSearchModal();
  const [numGuests, setNumGuests] = useState<string>("1");
  const [numBedrooms, setNumBedrooms] = useState<string>("0");
  const [numBathrooms, setNumBathrooms] = useState<string>("0");
  const [country, setCountry] = useState<SelectCountryValue>();
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  //
  //

  const closeAndSearch = () => {
    const newSearchQuery: SearchQuery ={
        country: country?.label,
        checkIn: dateRange.startDate,
        checkOut: dateRange.endDate,
        guests: parseInt(numGuests),
        bedrooms: parseInt(numBedrooms),
        bathrooms: parseInt(numBathrooms),
        category: ''
    }
    searchModal.setQuery(newSearchQuery)
    searchModal.close();
  };

  //
  //   SET DATE RANGE
  //

  const _setDateRange = (selection: Range) => {
    if (searchModal.step === "checkin") {
      searchModal.open("checkout");
    } else if (searchModal.step === "checkout") {
      searchModal.open("details");
    }

    setDateRange(selection);
  };

  //   CONTENTS
  let content = <></>;

  const contentLocation = (
    <>
      <h2 className="mb-6 text-2xl"> Whre do you want to go?</h2>
      <SelectCountry
        value={country}
        onChange={(value) => {
          setCountry(value as SelectCountryValue);
        }}
      />

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check in date -> "
          onClick={() => searchModal.open("checkin")}
        />
      </div>
    </>
  );

  const contentCheckin = (
    <>
      <h2 className="mb-6 text-2xl">When do you want to check in?</h2>

      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label=" <- Location "
          onClick={() => searchModal.open("location")}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check out date -> "
          onClick={() => searchModal.open("checkout")}
        />
      </div>
    </>
  );

  const contentCheckout = (
    <>
      <h2 className="mb-6 text-2xl">When do you want to check out?</h2>
      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label=" <- Check in date "
          onClick={() => searchModal.open("checkin")}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Details -> "
          onClick={() => searchModal.open("details")}
        />
      </div>
    </>
  );

  const contentDetails = (
    <>
      <h2 className="mb-6 text-2xl">Details</h2>
      <div className="space-y-4">
        <div className="space-y-4">
          <label> Number of guests:</label>
          <input
            type="number"
            placeholder="Number of Guests..."
            min="1"
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
            className="w-full h-14 px-4 border-gray-200 rounded-xl"
          />
        </div>

        <div className="space-y-4">
          <label> Number of Bedrooms:</label>
          <input
            type="number"
            placeholder="Number of Bedrooms..."
            min="1"
            value={numBedrooms}
            onChange={(e) => setNumBedrooms(e.target.value)}
            className="w-full h-14 px-4 border-gray-200 rounded-xl"
          />
        </div>

        <div className="space-y-4">
          <label> Number of Bathrooms:</label>
          <input
            type="number"
            placeholder="Number of Bathrooms..."
            min="1"
            value={numBathrooms}
            onChange={(e) => setNumBathrooms(e.target.value)}
            className="w-full h-14 px-4 border-gray-200 rounded-xl"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label=" <- Check in date "
          onClick={() => searchModal.open("checkout")}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton label="Search" onClick={() => closeAndSearch()} />
      </div>
    </>
  );

  if (searchModal.step == "location") {
    content = contentLocation;
  } else if (searchModal.step == "checkin") {
    content = contentCheckin;
  } else if (searchModal.step == "checkout") {
    content = contentCheckout;
  } else if (searchModal.step == "details") {
    content = contentDetails;
  }

  return (
    <Modal
      label="Search"
      content={content}
      close={searchModal.close}
      isOpen={searchModal.isOpen}
    />
  );
};

export default SearchModal;
