"use client";

interface MeunuLinkProps {
  label: string;
  onClick: () => void;
}

const MenuList: React.FC<MeunuLinkProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="px-6 py-4 cursor-pointer hover:bg-gray-100 transition">
      {label}
    </div>
  );
};

export default MenuList;
