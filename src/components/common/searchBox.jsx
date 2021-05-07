import React from "react";

export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="검색어를 입력하세요"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
