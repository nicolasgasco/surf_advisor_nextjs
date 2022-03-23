import React, { useRef, useState } from "react";

import styles from "./RadioInput.module.scss";

const RadioInput: React.FC<{
  name: string;
  setValueHandler?: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
  const [currentValue, setCurrentValue] = useState(0);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    props.setValueHandler(+e.target.value);
    setCurrentValue(+e.target.value);
  };

  return (
    <div className={styles["radio-container"]}>
      <div
        onChange={onChangeHandler}
        className={currentValue === 0 ? styles["selected"] : ""}
      >
        <input
          type="radio"
          id="no-answer"
          name={props.name}
          value={0}
          defaultChecked
        />
        <label htmlFor="no-answer">Dunno</label>
      </div>
      <div
        onChange={onChangeHandler}
        className={currentValue === 1 ? styles.selected : ""}
      >
        <input type="radio" id="no" name={props.name} value={1} />
        <label htmlFor="no">:(</label>
      </div>
      <div
        onChange={onChangeHandler}
        className={currentValue === 2 ? styles.selected : ""}
      >
        <input type="radio" id="neutral" name={props.name} value={2} />
        <label htmlFor="neutral">:|</label>
      </div>
      <div
        onChange={onChangeHandler}
        className={currentValue === 3 ? styles.selected : ""}
      >
        <input type="radio" id="yes" name={props.name} value={3} />
        <label htmlFor="yes">:)</label>
      </div>
    </div>
  );
};

export default RadioInput;
