import React, { Component } from "react";
import { Row, Container } from "reactstrap";

import ImageCard from "./imageCard";

class ImageGrayScale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        { src: "https://picsum.photos/200/300", isGrayScale: false, value: 1 },
        {
          src: "https://picsum.photos/200/300",
          isGrayScale: false,
          value: 0.8
        },
        {
          src: "https://picsum.photos/200/300",
          isGrayScale: false,
          value: 0.6
        },
        {
          src: "https://picsum.photos/200/300",
          isGrayScale: false,
          value: 0.4
        },
        { src: "https://picsum.photos/200/300", isGrayScale: false, value: 1 },
        { src: "https://picsum.photos/200/300", isGrayScale: false, value: 1 }
      ]
    };

    this.onClick = this.onClick.bind(this);
  }
  onClick(item, index) {
    const { images } = this.state;

    return () => {
      images[index].isGrayScale = !images[index].isGrayScale;
      this.setState({
        images: images
      });
    };
  }

  render() {
    const { images } = this.state;
    return (
      <Container className="container">
        <h2>GrayScale Images</h2>
        <Row>
          {images.map((item, index) => (
            <ImageCard imageItem={item} onClick={this.onClick(item, index)} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ImageGrayScale;
