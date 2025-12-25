"use client";

import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  return (
    <div>
      <p>Property {params.id}</p>
      <button onClick={() => router.replace("/")}>Go Home</button>
      <p>
        Name: {searchParams.get("name")} {searchParams.get("lname")}
      </p>
      {/* usage http://localhost:3000/properties/100?name=ajit */}

      <p>{pathName}</p>
    </div>
  );
};

export default PropertyPage;
