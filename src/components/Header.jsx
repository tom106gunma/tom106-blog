import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="body-font border-b border-gray-300 p-5 text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center md:flex-row">
        <Link href={'/'} passHref>
          <a className="title-font flex items-center font-medium text-gray-800 md:mb-0">
            <span className="text-3xl font-bold">tom106blog</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a
            className="mr-5 hover:text-gray-900"
            href="https://twitter.com/tom106gunma"
            rel="noreferrer"
            target="_blank"
          >
            <Image src="/images/twitter.svg" height="30" width="30" />
          </a>
          <a
            className="mr-5 hover:text-gray-900"
            href="https://github.com/tom106gunma"
            rel="noreferrer"
            target="_blank"
          >
            <Image src="/images/github.svg" height="30" width="30" />
          </a>
        </nav>
      </div>
    </header>
  );
}
