import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

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

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
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

  doSubmit = () => {
    saveMovie(this.state.data);

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
