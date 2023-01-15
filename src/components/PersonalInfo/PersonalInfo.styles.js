import styled from "styled-components";
import { grayColor } from "../../constants/constants";

export const PersonalInfoWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5vh;
  flex-wrap: wrap;
  height: fit-content;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.span`
  padding: 0.2vh 0.7vh;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  background-color: #b33430;
  margin-right: 0.5vw;
`;

export const Username = styled.span`
  font-weight: 800;
  font-size: 1.7rem;
  text-transform: capitalize;
`;

export const Name = styled.span`
  color: ${grayColor};
  margin-right: 1.5vw;
`;

export const Location = styled.span`
  color: ${grayColor};

  i {
    margin-right: 0.5vw;
  }
`;
