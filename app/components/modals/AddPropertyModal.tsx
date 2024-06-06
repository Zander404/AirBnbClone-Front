"use client";

import Iamge from "next/image";
import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import Categories from "../addproperty/Categories";

const AddPropertyModal = () => {
    //
    // States
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState('')


  //
  //
  const addPropertymodal = useAddPropertyModal();

  //
  //SetDatas
  const setCategory = (category: string) => {
    setDataCategory(category)
  }


  const context = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl"> Choose a category</h2>
          <Categories dataCategory={dataCategory}
          setCategory={(category) => setCategory(category)}
           />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : (
        <>
          <h2 className="mb-6 text-2xl"> Step 2</h2>
          
        </>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertymodal.isOpen}
        close={addPropertymodal.close}
        label="Add Property"
        content={context}
      />
    </>
  );
};

export default AddPropertyModal;
