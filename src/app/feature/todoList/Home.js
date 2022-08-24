import React, { useState } from "react";
import "../../../App.css";
import Logo from "../../../assets/img/photo-1585409677983-0f6c41ca9c3b.jpg";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { connect } from "react-redux";
import { add, edit, remove, id } from "./TodoReducer";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(add(obj)),
    removeTodo: (obj) => dispatch(remove(obj)),
    editTodo: (obj) => dispatch(edit(obj)),
  };
};

function Home(props) {
  const value = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleClick = () => {
    dispatch(id());
    if (todo == "") {
      alert("is empty");
    } else {
      props.addTodo({
        id: 1,
        name: todo,
        actions: false,
      });
      setTodo("");
    }
    // console.log(props.state.todo)
  };

  const handelChange = (event) => {
    setTodo(event.target.value);
  };

  const removeClick = (id) => {
    props.removeTodo(id);
    setTodo("");
  };

  const editClick = (item) => {
    props.editTodo(item.id);
    setTodo(item.name);
  };
  return (
    <div className="home">
      <div className="header">
        <div className="img">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="menu">
        <div className="title">
          <h2>TO DO </h2>
        </div>
        <div className="list">
          <div className="head">
            <input
              type="text"
              onChange={(event) => handelChange(event)}
              value={todo}
            />
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => handleClick()}
            ></i>
          </div>
          <ul id="list">
            {props.state.todo.map((item) => {
              if (item.actions == false) {
                return (
                  <li key={item.id}>
                    {item.name}
                    <div className="icon">
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => removeClick(item.id)}
                      ></i>
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => editClick(item)}
                      ></i>
                    </div>
                  </li>
                );
              } else {
                <div></div>;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
