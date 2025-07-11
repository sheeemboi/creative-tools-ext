import Card from "../components/ui/Card";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center h-60 bg-zinc-400 w-full rounded-lg p-4">
        <h1>Under Construction</h1>
        <p>
          Just wireframes, nothing to see here.
        </p>
      </section>
      <section className="flex flex-col gap-9 container h-fit w-full">
        <div className="h-12 max-w-100 bg-zinc-600 rounded-full"></div>
        <div className="flex gap-2 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="flex flex-col gap-9 container h-fit w-full">
        <div className="h-12 max-w-100 bg-zinc-600 rounded-full"></div>
        <div className="flex gap-2 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
