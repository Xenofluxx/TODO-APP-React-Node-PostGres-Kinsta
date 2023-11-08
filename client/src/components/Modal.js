import { Styled } from "./Modal.styles";
import { useState } from "react";
export const Modal = () => {
  const formMode = "Create a task";
  // 0 or stated in DB
  const [progressValue, setProgressValue] = useState(0);
  return (
    <Styled.Modal>
      <Styled.XButton
        style={{
          right: -10,
          top: -10,
          position: "absolute",
          borderRadius: "3px",
        }}
      >
        X
      </Styled.XButton>
      <Styled.MyForm>
        <p style={{fontWeight:'bold'}}>{formMode}</p>
        <input
          placeholder=" Enter a title"
          name="title"
          maxLength={30}
          required
        ></input>

        <p>
          <label>
            Enter your progress:
            <input
              name="progress"
              defaultValue={0}
              min={0}
              max={100}
              type="range"
              required
              onChange={(e) => {
                setProgressValue(e.target.value);
              }}
            ></input>
            {progressValue} %
          </label>
        </p>

        <Styled.SubmitButton>Submit</Styled.SubmitButton>
      </Styled.MyForm>
    </Styled.Modal>
  );
};
