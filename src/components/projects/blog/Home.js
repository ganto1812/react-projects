import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: blogs, isPending} = useFetch("http://localhost:3001/blogs")
  //npx json-server --watch data/db.json --port 3001
  const handleDelete = (id) => {
      // const newBlogs = data.filter(b => b.id!== id);
      // setBlogs(newBlogs);
  }

  return (
    <div className="home">
        {isPending && <div>Loading...</div>}
      <BlogList blogs={blogs} handleDelete={handleDelete}></BlogList>
    </div>
  );
};

export default Home;
