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
    fontSize: "2rem",
    color: "gold",
  };

  const emptyStarStyle = {
    fontSize: "2rem",
    color: "lightgray",
  };

  // Always call the hook
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
  });

  const handleChange = readOnly ? undefined : field.onChange;

  return (
    <div>
      <Rating
        initialRating={control ? field.value : defaultValue}
        onChange={handleChange}
        readonly={readOnly}
        emptySymbol={<span style={emptyStarStyle}>☆</span>}
        fullSymbol={<span style={starStyle}>★</span>}
      />
      {control && fieldState.error && <p>{fieldState.error.message}</p>}
    </div>
  );
};

export default RatingInput;
