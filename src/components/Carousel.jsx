import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  render() {
    return(
      <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[this.state.currentImage].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            this.state.currentImage > 0 && this.setState({currentImage:this.state.currentImage - 1});
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{images[this.state.currentImage].title}</h1>
          <p>{images[this.state.currentImage].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            this.state.currentImage < images.length - 1 && this.setState({currentImage:this.state.currentImage + 1});
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
    )
  }
}

export default Carousel;