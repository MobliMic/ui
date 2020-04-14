import React from "react";
import styled from "styled-components";

const Avatar = styled.div`
  border-radius: 100%;
  border: 5px solid #ffffff;
  overflow: hidden;
  width: ${({ size }) => (size ? size : "25rem")};
  height: ${({ size }) => (size ? size : "25rem")};
  margin-bottom: calc(-${({ size }) => (size ? size : "25rem")} / 2);
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export default ({ size }) => (
  <Avatar size={size}>
    <Image alt="header" src="https://placekitten.com/800/800" />
  </Avatar>
);
