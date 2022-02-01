import React from "react";
import "./Page3.css";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
export const Page3 = () => {
  return (
    <div>
      <CardGroup id="cht333">
        <Card id="bg333">
          <CardBody>
            <CardTitle className="ct333">Uniquely Your Max</CardTitle>
          </CardBody>

          <CardBody id="p333">
            <span id="spn1333">
              <Button id="btn222333" body className="text-center">
                <CardSubtitle className="sp222333">
                  STARTING AT /PER DAY
                </CardSubtitle>

                <CardSubtitle className="SP3333">$10.71</CardSubtitle>
              </Button>
            </span>

            <span id="spn2333">
              <CardBody>
                <CardImg id="imgg333" src="images/hhhh.png"></CardImg>
              </CardBody>
            </span>
          </CardBody>
          <CardFooter id="foo">
            <CardText className="foo">150+</CardText>
            <CardText className="foo1">food choices</CardText>
            <CardText className="foo">4</CardText>
            <CardText className="foo1">
              week <br /> plan
            </CardText>
            <CardText className="foo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vw"
                fill="currentColor"
                class="bi bi-snow3"
                viewBox="0 0 16 16"
              >
                <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5zm2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2 2-1.2z" />
              </svg>
            </CardText>

            <CardText className="foo1">forozen included</CardText>
            <CardText className="foo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="4vw"
                fill="currentColor"
                class="bi bi-hammer"
                viewBox="0 0 16 16"
              >
                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
              </svg>
            </CardText>
            <CardText className="foo1">
              built <br /> for you
            </CardText>
          </CardFooter>
        </Card>
      </CardGroup>
    </div>
  );
};
