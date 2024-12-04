import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {

  return (
    <div className="text-white pt-24 h-[1000px]">
      home
    </div>
  );
}
