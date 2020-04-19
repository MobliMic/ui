import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const LoaderSpan = styled.span`
  // positioning
  margin: 0 auto;
  top: 1rem;
  position: relative;

  font-size: 24px;
  height: auto;
  max-width: 10rem;
  text-align: center;

  animation-name: pulse;
  animation-duration: ${(props) =>
    props.options?.duration ? `${props.options?.duration}s` : "2s"};
  animation-iteration-count: ${(props) =>
    props.options?.iteration ? `${props.options?.iteration}s` : "infinite"};

  @keyframes pulse {
    0%,
    100% {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.2, 1.2, 1);
    }
  }
`;

const Loader = ({ message }) => {
  return <LoaderSpan>{message}</LoaderSpan>;
};

Loader.defaultProps = {
  message: "Loading",
  options: {
    duration: 2,
    iteration: "infinite",
  },
};

Loader.propTypes = {
  message: PropType.string,
  options: PropType.shape({
    duration: PropType.number,
    interation: PropType.string,
  }),
};

export default Loader;
