import { Outlet, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { MainMenu } from "./MainMenu";
import { Breadcrumbs } from "src/components/Breadcrumbs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useAppSelector } from "src/redux/hooks";
import { IncrementActionCreator } from "src/redux/actions";

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useAppSelector((state) => state.counter.value);
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Container>
      <button onClick={() => dispatch(IncrementActionCreator(1))}>Henlo</button>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Breadcrumbs pathNames={pathNames} />
        </Col>
        <Col xxl={12}>
          <Outlet />
        </Col>
        <Col xxl={12}>
          <footer></footer>
        </Col>
      </Row>
    </Container>
  );
};
