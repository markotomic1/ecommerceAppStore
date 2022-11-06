import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${income[1]?.total}</span>
          <span className='featuredMoneyRate'>
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownwardIcon className='featuredIcon negative' />
            ) : (
              <ArrowUpwardIcon className='featuredIcon' />
            )}
          </span>
        </div>
        <span className='featuredSub'>Compared to the last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4.415</span>
          <span className='featuredMoneyRate'>
            -11.4
            <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to the last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2.215</span>
          <span className='featuredMoneyRate'>
            -11.4
            <ArrowUpwardIcon className='featuredIcon' />
          </span>
        </div>
        <span className='featuredSub'>Compared to the last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
