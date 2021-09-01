import Navbar from './Navbar';
import Home  from "./Home";
import Create  from "./Create";
import "./blog.css";
import { Router, Route } from 'react-router';

const Blog = () => {
    
    return (
        <div className="blog">
            <Navbar></Navbar>
            <div className="content">
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/create' component={Create}></Route>
                {/* <Home></Home> */}
            </div>
        </div>
    )
}

export default Blog;