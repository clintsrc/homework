// TODO: Fill in the Advertisement component below to include the three string 
// fields `companyName`, `productDescription` and `price`.

interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
}

function Advertisement({companyName, productDescription, price}: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>{companyName}</p>
      <p>{productDescription}</p>
      <p>{price}</p>
    </div>
  );
}

export default Advertisement;
