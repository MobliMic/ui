import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const AvatarWrapper = styled.div`
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

const Avatar = ({ size, url, alt }) => (
  <AvatarWrapper size={size}>
    <Image alt={alt} src={url} />
  </AvatarWrapper>
);

Avatar.propTypes = {
  size: PropType.string,
  url: PropType.string.isRequired,
  alt: PropType.string.isRequired,
};

Avatar.defaultProps = {
  size: "25rem",
};

export default Avatar;
