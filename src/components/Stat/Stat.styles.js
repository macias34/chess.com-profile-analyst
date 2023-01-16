import styled from "styled-components";
import { grayColor } from "../../constants/constants";

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 2vw;
  background-color: #0d012e;
`;

export const StatIcon = styled.i`
  color: ${(props) => props.color};
  padding: 2vh;
  font-size: 2rem;
`;

export const StatValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatValue = styled.span`
  text-transform: capitalize;
  margin: 1vh 0;
  font-weight: 600;
  color: ${(props) =>
    props.current ? "#03C988" : "white" && props.unrated ? "red" : "white"};
  cursor: ${(props) => (props.current ? "pointer" : "inherit")};
`;
