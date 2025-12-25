"use client";

import { useRouter, useParams } from "next/navigation";

const PropertiesPage = () => {
  const router = useRouter();
  const params = useParams();
  console.log(router);
  return (
    <div>
      <p>Property {params.id}</p>
      <button onClick={() => router.replace("/")}>Go Home</button>
    </div>
  );
};

export default PropertiesPage;
