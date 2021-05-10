import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

export default class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("아이디"),
    password: Joi.string().required().min(5).label("비밀번호"),
    name: Joi.string().required().label("이름"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>
          어디에서든 <br />
          쉬운 비디오 대여
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
