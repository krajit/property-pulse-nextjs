import Link from "next/link";

const HomePage = () => {
  return ( <div className=""> 
  
  <h1 className="text-3xl"> Welcome </h1>
  <Link href='/properties'>Go to Properties</Link>
  
  </div> );
}
 
export default HomePage;