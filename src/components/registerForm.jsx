import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

export default class RegisterForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("아이디"),
    password: Joi.string().required().min(5).label("비밀번호"),
    name: Joi.string().required().label("이름"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submit for Register");
  };

  render() {
    return (
      <div>
        <h1>
          어디에서든 쉬운 비디오 대여
          <br />
          지금 함께하세요
        </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "아이디")}
          {this.renderInput("password", "비밀번호", "password")}
          {this.renderInput("name", "이름")}
          {this.renderButton("가입하기")}
        </form>
      </div>
    );
  }
}
