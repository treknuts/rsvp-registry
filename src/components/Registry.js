import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Registry = () => {
  return (
    <div className="bg-light rounded shadow p-4 w-25 d-flex flex-column align-items-center justify-content-center">
      <p className="mb-4">
        Trevor and Victoria are registered at Target and Amazon. You can view
        both registries through the links below.
      </p>
      <div className="row">
          <a className="col text-warning" href="https://www.amazon.com/hz/wishlist/ls/3O8OTPTAWW19X?">
            <FontAwesomeIcon size="3x" icon={faAmazon} />
          </a>
          <a className="col text-warning" href="https://www.target.com/gift-registry/dashboard?registryId=924f8bfa420d42a58e4b2ec92abe4fa6&newRegistry=true">
            <FontAwesomeIcon size="3x" icon={faBullseye} />
          </a>
      </div>
    </div>
  );
};

export default Registry;
