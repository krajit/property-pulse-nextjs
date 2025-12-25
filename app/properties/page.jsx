"use client";

import { useRouter } from "next/navigation";

const PropertiesPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <button onClick={() => router.replace("/")}>Go Home</button>
    </div>
  );
};

export default PropertiesPage;
