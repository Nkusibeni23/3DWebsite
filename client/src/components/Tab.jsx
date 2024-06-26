import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full bg-black" : "rounded-4"
      }`}
      onClick={handleClick}
    >
      <img src={tab.icon} alt="Icon" />
    </div>
  );
};
export default Tab;
