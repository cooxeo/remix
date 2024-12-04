// import { json, useLoaderData } from "@remix-run/react";
// import { Suspense } from "react";

// interface Posts {
//   id: number;
//   title: string;
// }

// export const loader = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return json(posts, {
//     headers: {
//       "Cache-Control": "no-cache", // Forces fresh fetch every time
//     },
//   });
// };

// const PostsComponent = () => {
//   const posts: Posts[] = useLoaderData<typeof loader>();

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-center my-24">All posts</h1>
//       <div>
//         {posts.map((post) => (
//           <p key={post.id}>{post.title}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Posts = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <PostsComponent />
//     </Suspense>
//   );
// };

// export default Posts;

import { json, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";

interface Posts {
  id: number;
  title: string;
}

export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return json(posts, {
    headers: {
      "Cache-Control": "no-cache", // Fresh fetch each time
    },
  });
};

const PostsComponent = () => {
  const posts: Posts[] = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-24">All posts</h1>
      <div>
        {posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  );
};

const Posts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Hide the loading spinner after hydration
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading posts...</div> // Show loading indicator
      ) : (
        <PostsComponent />
      )}
    </div>
  );
};

export default Posts;
