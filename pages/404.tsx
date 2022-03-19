import Image from "next/image";

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page wasn't found :(</h1>
      <Image src="/svg/404.svg" width={400} height={300} layout="responsive" />
    </main>
  );
};

export default NotFoundPage;
