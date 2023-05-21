import Link from 'next/link';
import Header from 'src/components/Header';
import 'src/styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-prose">
        <main className="mt-4">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
