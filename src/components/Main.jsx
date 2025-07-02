import Card from "./ui/Card";

export default function Main() {
  return (
    <main className="flex flex-col gap-13 p-6 flex-1">
      <section className="flex flex-col justify-center h-60 bg-zinc-400 w-full rounded-lg p-4">
        <h1>Hero Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales
          facilisis vestibulum.
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
    </main>
  );
}
