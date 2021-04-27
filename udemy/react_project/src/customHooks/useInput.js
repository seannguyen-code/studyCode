import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const clearText = () => {
    setValue(initialValue);
  };

  const bindForm = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, clearText, bindForm];
};

export default useInput;
