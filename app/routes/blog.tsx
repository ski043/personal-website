import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";

import { hygraph } from "~/utils/hygraph.server";
import { Post } from "~/utils/interface";

interface iAppProps {
  posts: Post;
}

export async function loader({}: LoaderArgs) {
  const query = gql`
    query Posts {
      posts {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
    }
  `;

  const posts = await hygraph.request(query);

  return json({ posts });
}

const Blog = () => {
  const { posts } = useLoaderData() as iAppProps;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Blog Posts
          </h1>
        </div>
        <ul>
          {posts.posts.map((post) => (
            <li key={5} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                  <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(post.createdAt).toISOString().split("T")[0]}
                  </p>
                </div>

                <Link
                  to={`/post/${post.slug}`}
                  className="space-y-3 xl:col-span-3"
                  prefetch="intent"
                >
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {post.overview}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blog;
