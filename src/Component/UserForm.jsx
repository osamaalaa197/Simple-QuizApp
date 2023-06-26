import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import Question from "./Question";
import { useSelector, useDispatch } from "react-redux";
import { getUserName, getUserGmail } from "../Store/Actions/ActionsCreation";
import { useEffect } from "react";
import { userAction } from "../Store/slice/UserSlice";
import getQuestionthunk from "../Store/middleware/getQuestionmiddleware";
import "./UserForm.css";
function UserForm() {
  const [UserName, setName] = useState("");
  const [Gmail, setEmail] = useState("");
  const handleUserNameChange = (event) => {
    setName(event.target.value);
  };
  const handleGmailChange = (event) => {
    setEmail(event.target.value);
  };
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(store, "store");
  // }, [store]);
  useEffect(() => {
    dispatch(getQuestionthunk());
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userAction.changeName(UserName));
    dispatch(userAction.changeGmail(Gmail));
  };
  return (
    <div class="login-box">
      <h2>Simple Quiz App</h2>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input type="text" value={UserName} onChange={handleUserNameChange} />
          ,<label>Username</label>
        </div>
        ,
        <div class="user-box">
          <input type="text" value={Gmail} onChange={handleGmailChange} />,
          <label>Gmail</label>
        </div>
        <a href="#">
        <button type="submit">
        <Link to={"/Question"}>Start</Link>
      </button>
          {/* <Link to={"/Question"}>Start</Link> */}

          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
        {/* <label>
        UserName:
        <input type="text" value={UserName} onChange={handleUserNameChange} />
      </label>
      <br />
      <label>
        Gmail:
        <input type="text" value={Gmail} onChange={handleGmailChange} />
      </label>
      <br />
      <button type="submit">
        <Link to={"/Question"}>CardDetail</Link>
      </button> */}
      </form>
    </div>
  );
}

export default UserForm;
