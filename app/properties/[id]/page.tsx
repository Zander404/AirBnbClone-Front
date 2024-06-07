import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import apiService from "@/app/services/apiServices";
import Image from "next/image";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}/`);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative ">
        <Image
          fill
          src={property.image_url}
          className="object-cover w-full h-full"
          alt={`${property.category}`}
        />
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl"> {property.title}</h1>
          <span className="mb-6 text-xl text-gray-600">
            {`${property.guests} guest - ${property.bedrooms} bedrooms - ${property.bathrooms} bathroom`}
          </span>
          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src={property.avatar_url}
              alt="beach house"
              width={50}
              height={50}
              className="rounded-full"
            />

            <p>
              <strong> {property.landlord.name}</strong> is your host
            </p>
          </div>

          <hr />
          <p className="mt-6 text-lg">
            {property.description}
          </p>
        </div>
        <ReservationSideBar property={property} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
