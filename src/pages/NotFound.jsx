import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div className="not-found">
            <img width="40" height="40" src="./img/notfound.svg" alt="notfound"></img>
            <h2> Sorry </h2>
            <p>That page cannot be found</p>
            <Link className="link" to="/">Back to the products page...</Link>
        </div>
    );
}

export default NotFound;