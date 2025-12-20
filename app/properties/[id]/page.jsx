const  PropertyPage = async ({ params }) => {

    const { id } = await params;

    return ( <div>
        Property page: { id }
    </div> );
}
 
export default PropertyPage;