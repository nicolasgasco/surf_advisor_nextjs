import classes from "./TextAreaInput.module.scss";

const TextAreaInput: React.FC<{
  htmlFor: string;
  placeholder: string;
  labelText: string;
  setValueHandler: () => {};
}> = (props) => {
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    props.setValueHandler(e.target.value);
  };

  return (
    <div className={classes["textarea-container"]}>
      <label htmlFor="comment">{props.labelText}</label>
      <textarea
        onChange={onChangeHandler}
        id="comment"
        name="comment"
        placeholder={props.placeholder}
        rows={5}
      />
    </div>
  );
};

export default TextAreaInput;
