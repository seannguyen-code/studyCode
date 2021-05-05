import styled from "styled-components";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ pageId, nthPage }) => {
    if (pageId === 0) {
      return "flex-end";
    } else if (pageId === nthPage - 1) {
      return "flex-start";
    } else return "space-between";
  }};
`;
