import { useLocation } from "react-router-dom";
import RankList from "../components/rank/rankList";
import { useEffect, useState } from "react";

const RankPage = () => {
  const [data, setData] = useState<MEMBER_INFO[]>();
  // get current pathname
  const { pathname } = useLocation();
  // if pathname equal current pathname, scroll screen to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const InitData = async () => {
    const URL = import.meta.env.VITE_SERVER_URL;

    try {
      const res = await fetch(`${URL}/rank/list`, {
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

  // invoke the init func one time
  useEffect(() => {
    InitData();
  }, []);

  return <div>{data && <RankList members={data} />}</div>;
};

export default RankPage;
