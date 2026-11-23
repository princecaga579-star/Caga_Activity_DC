
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Prince Caga</h1>

      <p>
        I am a student who enjoys learning programming
        and developing websites.
      </p>

      <p>
        I am interested in technology and improving
        my skills as a future developer.
      </p>

      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}
