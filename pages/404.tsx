import Image from "next/image";

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page wasn&apos;t found :(</h1>
      <Image src="/svg/404.svg" width={400} height={300} layout="responsive" alt=""/>
    </main>
  );
};

export default NotFoundPage;
