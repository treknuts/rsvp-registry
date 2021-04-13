import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Registry = () => {
  return (
    <div className="flex-col justify-center items-center w-full h-full">
      <p className="text-xl font-light text-center">
        Trevor and Victoria are registered at Target and Amazon. You can view
        both registries through the links below.
      </p>
      <ul className="flex justify-center text-center">
        <li className="m-4 p-8 rounded-xl bg-green text-pink-200">
          <a href="https://www.amazon.com/hz/wishlist/ls/3O8OTPTAWW19X?">
            <FontAwesomeIcon size="3x" icon={faAmazon} />
          </a>
        </li>
        <li className="m-4 p-8 rounded-xl bg-blue text-pink-200">
          <a href="https://www.target.com/gift-registry/dashboard?registryId=924f8bfa420d42a58e4b2ec92abe4fa6&newRegistry=true">
            <FontAwesomeIcon size="3x" icon={faBullseye} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Registry;
