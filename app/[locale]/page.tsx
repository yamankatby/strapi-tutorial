import Link from "next/link";
import { API_URL, PostsCollection } from "../api";

export default async function Home({ params }: { params: { locale: string } }) {
  const res = await fetch(`${API_URL}/posts?locale=${params.locale}`);
  const json: PostsCollection = await res.json();

  return (
    <div className="flex flex-col gap-6">
      {json.data.map((post) => (
        <Link key={post.id} href={`/${params.locale}/${post.attributes.slug}`}>
          <h2 className="text-2xl font-black">{post.attributes.title}</h2>
          <p className="mt-2 text-gray-500">
            {new Date(post.attributes.publishedAt).toLocaleDateString()}
          </p>
        </Link>
      ))}
    </div>
  );
}
