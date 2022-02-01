import React from "react";
import "./Page2.css";

import {
  Breadcrumb,
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
export const Page2 = () => {
  return (
    <div>
      <div className="App">
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle className="fr" tag="h2">
                Would you like to add fat-burning <br />
                shakes to your plan?
              </CardTitle>

              <CardText className="mm" tag="h6">
                Special Offer:50% OFF
              </CardText>
            </CardBody>

            <CardBody id="main">
              <CardBody className="fst">
                <Button className="btn1">Orange</Button>

                <Breadcrumb></Breadcrumb>

                <Button className="btns">Chocolate </Button>

                <Breadcrumb></Breadcrumb>

                <Button className="btns">Vanilla</Button>
              </CardBody>

              <CardBody id="send">
                <CardImg id="juc" src="images/juice-png-39493.png"></CardImg>
              </CardBody>
            </CardBody>

            <CardBody body className="text-center">
              <CardTitle id="nnn" tag="h2">
                $39.99 <span id="sp"> Regularly:$77.98</span>
              </CardTitle>
            </CardBody>

            <CardBody body className="text-center">
              <Button id="btn22">
                <CardSubtitle className="sp2">
                  <span id="ssss">$</span> 14-DAY MONEY
                </CardSubtitle>

                <CardSubtitle className="sp2">BACK GUARANTEE</CardSubtitle>
              </Button>
            </CardBody>

            <CardBody body className="text-center">
              <Button id="btn3" className="text-center">
                Continue to Checkout
              </Button>
            </CardBody>

            <CardBody body className="text-center">
              or <span id="span11">continue without shakes</span>
            </CardBody>

            <CardTitle></CardTitle>

            <CardTitle className="my" tag="h3">
              Burn fat & Help Shrink Your Belly
            </CardTitle>

            <CardSubtitle className="myy">
              28 delicious Shakes with protein and{" "}
            </CardSubtitle>

            <CardSubtitle className="myy">
              probiotics to help support your immune{" "}
            </CardSubtitle>

            <CardSubtitle className="myy">
              {" "}
              system and fight hunger!*
            </CardSubtitle>

            <ul id="ull">
              <li>
                <CardText className="ctt"> 15g protein</CardText>
              </li>

              <li>
                <CardText className="ctt">6g dietry fiber</CardText>
              </li>

              <li>
                <CardText className="ctt">21 vitamens & minerals</CardText>
              </li>

              <li>
                <CardText tag="h5" className="ct2">
                  FREE SHAKER BOTTLE!
                </CardText>
              </li>
            </ul>

            <CardBody>
              <CardSubtitle className="ft">
                *As part of a healthy diet and exercise program.
              </CardSubtitle>

              <CardSubtitle className="ftt">
                Discount included with auto-delivery, first shipment only with 
              </CardSubtitle>

              <CardSubtitle className="ft">
                auto delivery you are automatically changed and shipped
              </CardSubtitle>

              <CardSubtitle className="ft">
                shaked once every 4 weeks until you cancel free shaker bottle
              </CardSubtitle>

              <CardSubtitle className="ft">on first delivery only</CardSubtitle>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};
