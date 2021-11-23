export type Post = {
  slug: string;
  title: string;
};

export function getPosts() {
  let posts: Post[] = [
    {
      slug: "my-first-post",
      title: "kunal's First Post",
    },
    {
      slug: "how-to-be-tony-stark",
      title: "Awesome tutorial on How to be Tony Stark",
    },
  ]; 
  return posts;
}  




