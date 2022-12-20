import React, { useState } from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const ButtonsSort: React.FC<{
  isListInView1: boolean;
  setIsListInView1: (status: boolean) => void;
}> = ({ isListInView1, setIsListInView1 }) => {
  const [sortedBy, setSortedBy] = useState("");

  return (
    <div className="flex children-styles">
      <button onClick={() => setIsListInView1(true)}>
        <IconView1 className={isListInView1 ? "text-violet-600" : ""} />
      </button>
      <button onClick={() => setIsListInView1(false)}>
        <IconView2 className={!isListInView1 ? "text-violet-600" : ""} />
      </button>
      <select
        className="ml-auto inputStyles"
        value={sortedBy}
        onChange={({ target }) => setSortedBy(target.value)}
      >
        <option value="" disabled>
          Sort by
        </option>
        <option value="min-date">New</option>
        <option value="max-date">Last</option>
        <option value="completed-first">Completed first</option>
        <option value="uncompleted-first">Uncompleted first</option>
      </select>
    </div>
  );
};

export default ButtonsSort;
