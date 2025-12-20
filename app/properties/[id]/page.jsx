'use client';

import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const  PropertyPage = () => {

    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    console.log(router);

    return ( <div>
        <button onClick={ () => router.replace('/')}> Go HOme</button>

        <p>Property Page: {params.id}</p>

        <p>Hello: {searchParams.get('fName')} {searchParams.get('lName')}</p>

        <p>{pathName}</p>
    </div> );
}
 
export default PropertyPage;