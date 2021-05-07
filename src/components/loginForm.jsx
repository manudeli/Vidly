import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

export default class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("아이디"),
    password: Joi.string().required().label("비밀번호"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>
          비디오를
          <br />전 세계 어디에서든 대여하세요 🌎
        </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "아이디")}
          {this.renderInput("password", "비밀번호", "password")}
          {this.renderButton("로그인하기")}
        </form>
      </div>
    );
  }
}
