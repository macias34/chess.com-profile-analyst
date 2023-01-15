import styled from "styled-components";
import { defaultAvatarSrc } from "../../constants/constants";

export const UserCardWrapper = styled.div`
  width: 40vw;
  display: flex;
  background-color: rgba(0, 0, 0, 0.18);
  padding: 5vh;
`;

export const Avatar = styled.div`
  height: 160px;
  width: 160px;
  background-size: cover;
  background-image: url(${(props) => props.avatarSrc || defaultAvatarSrc});
`;

export const UserInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1.5vw;
  width: 70%;
`;

export const Stats = styled.div`
  /* ... */
`;
