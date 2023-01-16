import styled from "styled-components";
import { defaultAvatarSrc } from "../../constants/constants";
import { purpleColor } from "../../constants/constants";

export const UserCardWrapper = styled.div`
  height: 25vh;
  width: 40vw;
  display: flex;
  background-color: ${purpleColor};
  padding: 5vh;
  border-radius: 15px;
`;

export const Avatar = styled.div`
  height: 25vh;
  width: 25vh;
  background-size: cover;
  background-image: url(${(props) => props.avatarSrc || defaultAvatarSrc});
  margin-right: 1.5vw;
`;

export const UserInfo = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Stats = styled.div`
  /* ... */
`;
