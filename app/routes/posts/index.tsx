import { useLoaderData, Link } from "remix";
import { getPosts } from "~/posts";

type Post = {
    slug: string,
    title: string
}

export let loader = () => { 
    let posts:Post[] = getPosts();
    return posts;
};

export default function Posts() {
  let posts= useLoaderData<Post[]>(); 
  console.log("Posts data", posts);
  return (
    <div>
      {posts.length > 0 ?  
      (
        posts.map((post: Post) => <div key={post.slug}><Link to={post.slug}>{post.title}</Link></div> )
      ) : (
        <div>Posts</div>
      )}
    </div>
  );
}
