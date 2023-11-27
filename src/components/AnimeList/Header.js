import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm transition-all bg-indigo-500 hover:bg-indigo-700 rounded-md text-white p-2"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
