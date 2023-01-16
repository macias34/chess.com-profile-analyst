import { Tooltip } from "@mui/material/";

import { StatWrapper, StatIcon, StatValues, StatValue } from "./Stat.styles";

const Stat = ({ data, color, label, icon }) => {
  const current = data?.last?.rating;
  const peak = data?.best?.rating;
  return (
    <StatWrapper>
      <StatIcon className={icon} color={color} />
      <StatValues>
        <StatValue>{label}</StatValue>
        {current ? (
          <Tooltip title={`Peak : ${peak}`}>
            <StatValue current>{current}</StatValue>
          </Tooltip>
        ) : (
          <StatValue unrated>Unrated</StatValue>
        )}
      </StatValues>
    </StatWrapper>
  );
};

export default Stat;
