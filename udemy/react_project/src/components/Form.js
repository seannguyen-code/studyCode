import React from "react";

import useInput from "../customHooks/useInput";

const Form = () => {
  const [name, clearName, bindName] = useInput();
  const [email, clearEmail, bindEmail] = useInput();

  const submitHanlder = (e) => {
    e.preventDefault();
    alert(`Name is ${name} and email is ${email}`);
    clearName();
    clearEmail();
  };

  return (
    <div>
      <form onSubmit={submitHanlder}>
        <div>
          <label>Name</label>
          <input type="text" {...bindName} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...bindEmail} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
