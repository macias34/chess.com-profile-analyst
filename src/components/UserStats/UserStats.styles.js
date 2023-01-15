import styled from "styled-components";
import { grayColor } from "../../constants/constants";

export const UserStatsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const UserStat = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${grayColor};
`;

export const Icon = styled.i`
  font-size: 1.5rem;
`;

export const StatValue = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  margin: unset;
  margin-top: 1vh;
`;
