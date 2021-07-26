//the async keyword comes before the function you want to use await in
const data = async () => {
  //get the resource returned by the api
  const resource = await fetch("api/for/some/resource");
  //convert the returned data to json
  const posts = await resource.json();
  //make it available
  return posts;
};
