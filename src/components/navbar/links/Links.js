import Link from "next/link";

export default function Links() {
  const links = [
    { title: "HomePage", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.url} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
