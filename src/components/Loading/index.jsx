import React from "react";
import "./PageLoading.scss";
import Loader from "./Loader";
import ListOfCharacters from "../ListOfCharacters";

function Loading() {
  return (
    <div className="PageLoading">
      <Loader />
      <ListOfCharacters />
    </div>
  );
}

export default Loading;
