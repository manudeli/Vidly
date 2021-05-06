import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

export default class MoviesTable extends Component {
  columns = [
    { path: "title", label: "제목" },
    { path: "genre.name", label: "장르" },
    { path: "numberInStock", label: "재고" },
    { path: "dailyRentalRate", label: "평점" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-sm"
        >
          🗑️
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
