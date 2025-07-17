import Cards from "../components/CardsList";

export default function Home({ tools }) {
  return (
    <>
      <section className="flex flex-col justify-center h-60 border-1 border-zinc-200 w-full rounded-lg p-4">
        <h1>graphic & web design tools</h1>
        <p>extra tools for your design projects.</p>
      </section>
      <ul className="flex justify-between container h-fit max-w-full flex-wrap">
        <Cards tools={tools} />
      </ul>
    </>
  );
}
