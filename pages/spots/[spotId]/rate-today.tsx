import type { NextPage } from "next";
import React, { useState } from "react";
import RadioInput from "../../../components/lib/RadioInput";
import TextAreaInput from "../../../components/lib/TextAreaInput";

const DailyReviewPage: NextPage = (props) => {
  const [ableToSurf, setAbleToSurf] = useState(0);
  const [wavesQuantity, setWavesQuantity] = useState(0);
  const [wavesHeight, setWavesHeight] = useState(0);
  const [peopleQuantity, setPeopleQuantity] = useState(0);
  const [comment, setComment] = useState("");

  const todayDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const rateTodayFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      ableToSurf,
      wavesQuantity,
      wavesHeight,
      peopleQuantity,
      comment
    );
  };
  return (
    <>
      {comment}
      <h1>How was the sea like today?</h1>
      <p>
        Please rate only <em>today</em>'s ({todayDate}) conditions.
      </p>
      <form onSubmit={rateTodayFormHandler}>
        <h2>Were you able to surf today?</h2>
        <RadioInput name="able-to-surf" setValueHandler={setAbleToSurf} />
        <h2>Were there enough waves?</h2>
        <RadioInput name="waves-quantity" setValueHandler={setWavesQuantity} />
        <h2>Were the waves high enough?</h2>
        <RadioInput name="waves-height" setValueHandler={setWavesHeight} />
        <h2>Were there too many people?</h2>
        <RadioInput
          name="people-quantity"
          setValueHandler={setPeopleQuantity}
        />
        <h2>Short comment on the sea conditions</h2>
        <TextAreaInput
          labelText="Short comment on the sea conditions"
          placeholder="Be clear and concise"
          setValueHandler={setComment}
          htmlFor="comment"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default DailyReviewPage;
