import {
  PersonalInfoWrapper,
  Title,
  Username,
  Name,
  Location,
} from "./PersonalInfo.styles";

const PersonalInfo = ({ title, username, url, name, location }) => {
  return (
    <PersonalInfoWrapper>
      <div>
        {title ? <Title>{title}</Title> : ""}
        <a href={url}>
          <Username>{username}</Username>
        </a>
      </div>
      <div>
        {name ? <Name>{name}</Name> : ""}
        {location ? (
          <Location className="location">
            <i className="fa-solid fa-location-dot" />
            {location}
          </Location>
        ) : (
          ""
        )}
      </div>
    </PersonalInfoWrapper>
  );
};

export default PersonalInfo;
