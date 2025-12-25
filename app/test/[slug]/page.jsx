const SlugPage = async ({ params, searchParams }) => {
  const { slug } = await params;
  const { name } = await searchParams;

  // usage http://localhost:3000/test/what?name=fuck
  return (
    <div>
      <p>slug {slug}</p>
      <p>sp {name}</p>
    </div>
  );
};

export default SlugPage;
