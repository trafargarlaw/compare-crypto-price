import Image from "next/image";
import { useState } from "react";
import { IServerSideProps } from "../pages";

interface TableProps {
  data: IServerSideProps["tableData"];
  selectedFeatures: string[];
}
const Table: React.FC<TableProps> = ({ data, selectedFeatures }) => {
  const addComma = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [sortBy, setSortBy] = useState<"price" | "volume_AUD">("price");
  const [isDescending, setIsDescending] = useState(true);

  return (
    <article className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr className="table-head__row">
            <th>EXCHANGE</th>
            <th>
              <div className="table-head__row_with_filter">
                PRICE
                <button
                  onClick={() => {
                    setSortBy("price");
                    setIsDescending(!isDescending);
                  }}
                >
                  <Image
                    width={15}
                    height={12}
                    src="/images/icons/icon-down.png"
                    alt="down-arrow"
                  />
                </button>
              </div>
            </th>
            <th>
              <div className="table-head__row_with_filter">
                VOLUME (24H)
                <button
                  onClick={() => {
                    setSortBy("volume_AUD");
                    setIsDescending(!isDescending);
                  }}
                >
                  <Image
                    width={15}
                    height={12}
                    src="/images/icons/icon-down.png"
                    alt="down-arrow"
                  />
                </button>
              </div>
            </th>
            <th>FEATURES</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data
            .filter((value) => {
              // check if value.features includes all the selected features
              return selectedFeatures.every((feature) =>
                value.features.includes(feature)
              );
            })
            .sort((a, b) =>
              isDescending ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
            )
            .map((item, index) => (
              <tr className="table-body__row" key={index}>
                <td>
                  <div className="image-label">
                    <div className="image-label_img">
                      <Image
                        src={`/images/${item.exchange}.png`}
                        alt={item.exchange}
                        layout="fill"
                      />
                    </div>
                    <span>{item.exchange}</span>
                    <button>Buy</button>
                  </div>
                </td>
                <td>
                  <span>{`${addComma(item.price)} AUD`}</span>
                </td>
                <td>
                  <div className="volume">
                    <p>{addComma(item.volume_AUD)}</p>
                    <p>AUD</p>
                    <p>{addComma(item.volume_BTC)}</p>
                    <p>BTC</p>
                  </div>
                </td>
                <td>
                  {item.features.map((feature, j) => (
                    <p key={`${index}-${j}`}>{feature}</p>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </article>
  );
};

export default Table;
