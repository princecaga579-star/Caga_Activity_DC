import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col justify-center px-6 py-24">
      <section className="rounded-3xl border border-gray-800 bg-gray-900 p-8 md:p-14">
        <p className="mb-4 font-medium text-blue-400">
          Welcome to my personal website
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Hello, my name is Prince Caga.
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-400">
          I am a student interested in programming, technology,
          and web development. I enjoy learning new skills,
          building projects, and improving my knowledge of
          software development.
        </p>

        <Link
          href="/projects"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          See my projects →
        </Link>
      </section>
    </main>
  );
}