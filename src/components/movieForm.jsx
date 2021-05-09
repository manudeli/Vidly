import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

export default class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("제목"),
    genreId: Joi.string().required().label("장르"),
    numberInStock: Joi.number().required().min(0).max(100).label("재고수량"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("평점"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>MovieForm </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "제목")}
          {this.renderSelect("genreId", "장르", this.state.genres)}
          {this.renderInput("numberInStock", "재고", "number")}
          {this.renderInput("dailyRentalRate", "평점")}
          {this.renderButton("저장하기")}
        </form>
      </div>
    );
  }
}
