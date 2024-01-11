import { useGlobalContext } from "../context/global";

export default function Home() {
  const gData = useGlobalContext();

  console.log(gData);

  return (
    <>
      <main></main>
    </>
  );
}