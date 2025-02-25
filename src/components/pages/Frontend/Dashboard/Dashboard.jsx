import React from "react";

import { Plus } from "lucide-react";

import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";

import { setIsAdd } from "../Store/storeAction";
import { StoreContext } from "../Store/storeContext";
import DashboardCard from "./DashboardCard";
import DashboardCharts from "./DashboardCharts";
import DashboardMaps from "./DashboardMaps";
import DashboardTable from "./DashboardTable";
import Footer from "../Footer";
import ModalAddDashboard from "./ModalAddDashboard";

const Dashboard = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main   ">
        <div className=" layout-division ">
          <main className="">
            <Header title="Dashboard" subtitle="" />
            <div className="p-8">
              <div className="flex flex-row  justify-between items-center">
                <Searchbar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> add New
                </button>
              </div>
              <div className="py-5 flex flex-col gap-5 ">
                <div>
                  <DashboardTable />
                </div>
                <di>
                  <DashboardCard />
                </di>
                <div>
                  <DashboardCharts />
                </div>
                <div>
                  <DashboardMaps />
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {/* {store.isView && <SpinnerWindow/>} */}
      {store.isAdd && <ModalAddDashboard/>}
    </>
  );
};

export default Dashboard;
