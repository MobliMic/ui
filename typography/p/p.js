import styled from "styled-components";
import PropType from "prop-types";

const P = styled.p`
  margin: 0;
  padding: 1rem 0;
  font-size: 1.8rem;

  ${(props) =>
    props.noMargin
      ? ``
      : `&:last-of-type {
        margin-bottom: 4rem;
        padding-bottom: 0;
      }`}
`;

P.defaultProps = {
  noMargin: false,
};

P.propTypes = {
  noMargin: PropType.boolean,
};

export default P;
