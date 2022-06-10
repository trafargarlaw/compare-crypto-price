import Image from "next/image";
import { IServerSideProps } from "../pages";

interface TableProps {
  data: IServerSideProps["tableData"];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr className="table-head__row">
            <th>EXCHANGE</th>
            <th>
              <div className="table-head__row_with_filter">
                PRICE
                <div>
                  <Image
                    width={15}
                    height={12}
                    src="/images/icons/icon-down.png"
                    alt="down-arrow"
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="table-head__row_with_filter">
                VOLUME (24H)
                <div>
                  <Image
                    width={15}
                    height={12}
                    src="/images/icons/icon-down.png"
                    alt="down-arrow"
                  />
                </div>
              </div>
            </th>
            <th>FEATURES</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((item, index) => (
            <tr className="table-body__row" key={index}>
              <td>
                <div className="image-label">
                  <img
                    src={`/images/${item.exchange}.png`}
                    alt={item.exchange}
                  />
                  <span>{item.exchange}</span>
                </div>
              </td>
              <td>
                <span>{item.price}</span>
              </td>
              <td>
                <div className="volume">
                  <p>{item.volume_AUD}</p>
                  <p>AUD</p>
                  <p>{item.volume_BTC}</p>
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
    </div>
  );
};

export default Table;
