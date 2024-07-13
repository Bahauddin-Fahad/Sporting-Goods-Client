/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useController, Control, FieldValues } from "react-hook-form";
import Rating from "react-rating";

interface RatingInputProps {
  name: string;
  control?: Control<FieldValues>;
  defaultValue?: number;
  readOnly?: boolean;
}

const RatingInput: React.FC<RatingInputProps> = ({
  name,
  control,
  defaultValue = 0,
  readOnly = false,
}) => {
  const starStyle = {
    fontSize: readOnly ? "1.2rem" : "2rem",
    color: "gold",
  };

  const emptyStarStyle = {
    fontSize: readOnly ? "1.2rem" : "2rem",
    color: "lightgray",
  };

  const { field, fieldState } = control
    ? useController({
        name,
        control,
        defaultValue,
      })
    : { field: { value: defaultValue }, fieldState: undefined };

  const value = field.value;
  const handleChange = readOnly ? undefined : field.onChange;

  return (
    <>
      <Rating
        initialRating={value}
        onChange={handleChange}
        readonly={readOnly}
        emptySymbol={<span style={emptyStarStyle}>☆</span>}
        fullSymbol={<span style={starStyle}>★</span>}
      />

      {control && fieldState?.error && <p>{fieldState.error.message}</p>}
    </>
  );
};

export default RatingInput;
