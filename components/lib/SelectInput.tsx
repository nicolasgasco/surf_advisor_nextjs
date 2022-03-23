import React from "react";

import styles from "./SelectInput.module.scss";

const SelectInput: React.FC<{
  className?: string;
  labelText: string;
  selectId: string;
  selectValue: string;
  disabled?: boolean;
  selectOnchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any[];
  title?: string;
}> = (props) => {
  return (
    <div className={`${props.className} ${styles["select-container"]}`}>
      <label htmlFor={props.selectId}>{props.labelText}</label>
      <select
        name={props.selectId}
        id={props.selectId}
        value={props.selectValue}
        onChange={props.selectOnchange}
        disabled={props.disabled}
        title={props.title}
      >
        {props.options}
      </select>
    </div>
  );
};

export default SelectInput;
