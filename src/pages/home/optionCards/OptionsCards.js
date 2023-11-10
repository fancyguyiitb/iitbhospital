import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";

const OptionsCards = () => {
  return (
    <ContentWrapper>
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
    </ContentWrapper>
  );
};

export default OptionsCards;
