import { Link } from "@remix-run/react";
import Menu from "./Menu";
import { Provider } from "~/components/ui/provider";

// interface navItems {
//   id: number;
//   title: string;
//   src: string;
// }

// const navLinks: navItems[] = [
//   {
//     id: 0,
//     title: "CodeLabs",
//     src: "/codelabs",
//   },
//   {
//     id: 1,
//     title: "Contact",
//     src: "/contact",
//   },
// ];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-auto max-w-2xl w-full p-6">
      <div>
        <Link to="/" className="text-2xl font-bold">
          Vishal
        </Link>
      </div>
      <div className="flex w-full">
        <Provider>
          <Menu />
        </Provider>
      </div>
    </nav>
  );
}
