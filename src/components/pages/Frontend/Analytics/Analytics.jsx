import React from "react";

import Maps from "../Maps";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { setIsAdd } from "../Store/storeAction";
import { StoreContext } from "../Store/storeContext";
import AnalyticsChart from "./AnalyticsChart";

const Analytics = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main ">
        <div className=" layout-division ">
          {/* <SideNav menu="Analytics" /> */}
          <main className="">
            <Header title="Analytics" subtitle="" />
            <div className="py-5 flex flex-col gap-5 ">
              <div>
                <Maps />
              </div>
              <div>
                <AnalyticsChart />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Analytics;
