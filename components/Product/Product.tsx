import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  price: string;
  category: string;
  iconUrl: string;
  imageUrl: string;
  productInfo: any;
}

const Product: React.FC<Props> = ({
  title,
  price,
  category,
  iconUrl,
  imageUrl,
  productInfo,
}) => {
  return (
    <div className=" ">
      <Link
        href={{
          pathname: "/exchange/product/sdsdu",
          query: productInfo,
        }}
      >
        {/* <div
        className="w-[250px] h-[150px] bg-red-700 rounded-lg bg-cover bg-center"
        style={{ background: `url(${imageUrl})` }}
      ></div> */}
        <Image
          src={imageUrl}
          alt="apple card"
          width={250}
          height={0}
          // className="w-[250px] h-auto"
          // style={{ objectFit: "contain" }}
        />
        <div className="flex justify-between border-b border-gray-600 py-3">
          <p className="text-white text-sm">{title}</p>
          <p className="text-green-400 text-xs px-1 py-1 border-2 border-green-400 rounded-sm">
            ${price}
          </p>
        </div>
        <div className="py-2 flex justify-between items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <img src={iconUrl} width={20} />
            <p className="text-xs text-white">{category}</p>
          </div>
          <div>
            <span className="text-white text-xs">Qty: 14</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
