import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center p-5 m-5">
          <Spinner
            animation="border"
            role="status"
            variant="dark"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    </div>
  );
}
