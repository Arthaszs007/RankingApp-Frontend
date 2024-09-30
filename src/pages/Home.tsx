import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import ActList from "../components/activities/actList";

const HomePage = () => {
  const [data, setData] = useState<MEMBER_INFO[]>();
  // get current pathname
  const { pathname } = useLocation();
  // use for refresh page data
  const refresh = useAppSelector((state) => state.refreshData_Slice.homePage);

  // if pathname equal current pathname, scroll screen to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // init the home page data
  const InitData = async () => {
    const URL = import.meta.env.VITE_SERVER_URL;

    try {
      const res = await fetch(`${URL}/event/list`, {
        method: "GET",
      });

      const data = await res.json();
      if (!data.data) {
        throw new Error(data.msg);
      }
      setData(data.data);
    } catch (e) {
      throw new Error(`${e}`);
    }
    // resort by ID in ascending order
  };

  // invoke the init func one time, when the refresh changed, re-access api to get data again
  useEffect(() => {
    InitData();
  }, [refresh]);
  return <div>{data && <ActList members={data} />}</div>;
};

export default HomePage;
