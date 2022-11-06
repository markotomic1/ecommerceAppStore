import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (error) {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
