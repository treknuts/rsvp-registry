import "./Registry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import TargetSVG from "./TargetSVG";

const Registry = () => {
  return (
    <section className='main-content mt-4 bg-light rounded shadow p-2 p-md-5'>
      <div className='row d-flex align-items-center '>
        <p className='text-center col mb-4'>
          Victoria and Trevor are registered at the following retailers. Gifts
          are greatly appreciated but <strong>NOT</strong> required. Your
          presence is all we ask for!
        </p>
        <div className='d-md-none w-100'></div>
        <div className='mx-auto registry-buttons col d-grid'>
          <a
            className='btn btn-warning mb-4 m-md-2'
            href='https://www.amazon.com/hz/wishlist/ls/3O8OTPTAWW19X?'
          >
            <FontAwesomeIcon icon={faAmazon} size='3x' />
          </a>
          <a
            className='btn btn-warning mb-4 m-md-2'
            href='https://www.target.com/gift-registry/gift-giver?registryId=509d6ce0-91c2-11ec-8f8b-f11c36c712e6&type=WEDDING'
          >
            <TargetSVG />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registry;
