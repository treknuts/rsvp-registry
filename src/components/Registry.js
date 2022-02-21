import "./Registry.css";

const Registry = () => {
  return (
    <div className="main-content bg-light rounded shadow p-5">
      <p className="text-center mb-4">
        Victoria and Trevor are registered at the following retailers.
      </p>
      <div className="d-flex flex-column justify-content-center registry-buttons mx-auto">
        <a
          className="btn btn-warning mb-2"
          href="https://www.amazon.com/hz/wishlist/ls/3O8OTPTAWW19X?"
        >
          Amazon
        </a>
        <a
          className="btn btn-warning mb-2"
          href="https://www.target.com/gift-registry/gift-giver?registryId=509d6ce0-91c2-11ec-8f8b-f11c36c712e6&type=WEDDING"
        >
          Target
        </a>
        <a
          className="btn btn-warning"
          href="https://www.ikea.com/us/en/favorites/receive-share/59437330:1,00393371:1,60383519:2,90515127:1,80505020:1,10529091:1,70479663:1,20507116:1,49421438:1,60506030:1,90522024:1,10506476:1,00513905:1,80487827:1,20512759:1,20504194:1,80511337:1,00496717:1,80510922:1,30504848:1,10506508:1,00506491:1,90503186:1,09418584:1,50465695:1"
        >
          IKEA
        </a>
      </div>
    </div>
  );
};

export default Registry;
