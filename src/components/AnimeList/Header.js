import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm transition-all  hover:text-color-accent rounded-md text-color-primary p-2"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
