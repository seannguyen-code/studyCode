import React, { Component } from "react";
import { Col, Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class ImageCard extends Component {
  render() {
    const { imageItem, onClick } = this.props;
    let style = {
      filter:
        imageItem.isGrayScale === true
          ? `grayscale(${imageItem.value})`
          : "grayscale(0)"
    };
    return (
      <Col sm="4">
        <Card>
          <CardImg
            top
            width="100%"
            src={imageItem.src}
            style={style}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <Button onClick={onClick}>Change</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default ImageCard;
