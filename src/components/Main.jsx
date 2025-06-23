import Card from "./ui/Card";

export default function Main() {
  return (
    <main className="flex flex-col gap-13 flex-1 ml-72 p-6">
      <section className="h-28 bg-zinc-400 w-124 mt-12 rounded-4xl p-4 flex items-center">
        <h1>Under construction...</h1>
      </section>
      <section className="flex flex-col gap-9 container h-60">
        <div className="h-12 w-100 bg-zinc-600 rounded-full"></div>
        <div className="flex gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="flex flex-col gap-9 container h-60">
        <div className="h-12 w-100 bg-zinc-600 rounded-full"></div>
        <div className="flex gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
