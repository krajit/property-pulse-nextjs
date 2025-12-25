import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      {" "}
      <div>Hello</div>
      <Link href="/properties">Properties</Link>
    </div>
  );
};

export default HomePage;
