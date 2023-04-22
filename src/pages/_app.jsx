import Link from 'next/link';
import 'src/styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto max-w-prose">
      <header className="border-b border-gray-300 py-4">
        <h1>
          <Link href="/">
            <a className="text-5xl font-bold">tom106blog</a>
          </Link>
        </h1>
      </header>
      <main className="mt-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
