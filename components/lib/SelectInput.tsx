import React from "react";

const SelectInput: React.FC<{
  className?: string;
  labelText: string;
  selectId: string;
  selectValue: string;
  disabled?: boolean;
  selectOnchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any[];
}> = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.selectId}>{props.labelText}</label>
      <select
        name={props.selectId}
        id={props.selectId}
        value={props.selectValue}
        onChange={props.selectOnchange}
        disabled={props.disabled}
      >
        {props.options}
      </select>
    </div>
  );
};

export default SelectInput;
