import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "~/components/ui/menu";

interface NavItem {
  id: number;
  title: string;
  src: string;
}

const navLinks: NavItem[] = [
  { id: 0, title: "CodeLabs", src: "/codelabs" },
  { id: 1, title: "Contact", src: "/contact" },
];

const Menu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          MENU
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="text">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.src}
              className="block px-4 py-2 text-sm hover:bg-gray-200 rounded"
            >
              <p className="flex flex-col">{item.title}</p>
            </Link>
          ))}
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default Menu;
