import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

export default class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("아이디"),
    password: Joi.string().required().label("비밀번호"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
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
          로그인하셔서
          <br />
          가장 쉬운 비디오 대여를
          <br />
          체험하세요 🌎
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
