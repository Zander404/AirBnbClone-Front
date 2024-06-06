"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import AddProperty from "../modals/AddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyProps> = ({ userId }) => {
  const loginModal = useLoginModal();
  const addPropertymodal = useAddPropertyModal();
  const airbnbYourHome = () => {
    if (userId) {
      addPropertymodal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-100"
    >
      Django House
    </div>
  );
};

export default AddPropertyButton;
