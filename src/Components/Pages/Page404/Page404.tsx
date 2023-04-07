import "./Page404.css";
import pic404 from "../../../Assets/Image/pic404.jpg";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
		
            <h2>We can't find this page</h2>
            <img src={pic404}/>	
        </div>
    );
}

export default Page404;
