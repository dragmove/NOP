import React, { FC, PureComponent, ReactElement } from "react";
import styled from "styled-components";

interface PropTypes {}

const ContactLogo: FC<PropTypes> = (props: PropTypes): ReactElement => {
  return (
    <Wrap className="logo">
      <JobTitle>Front-end Developer</JobTitle>
      <Me>
        개발자.
        <br />
        김현석
      </Me>
    </Wrap>
  );
};

export default ContactLogo;

const Wrap = styled.div`
  position: absolute;
  padding: 8px 0 0 0;
  top: 15px;
  left: 15px;
  width: 144px;
  border-top: 4px solid #fff;
`;

const JobTitle = styled.p`
  font-size: 14px;
  font-family: "liberation_sansbold_italic", "Carme", "Lato", Roboto, Ubuntu,
    san-serif;
  text-decoration: underline;
  color: #ffffff;
`;

const Me = styled.p`
  margin-top: 14px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Gothic A1", "Nanum Gothic", dotum, verdana, Arial, applegothic,
    sans-serif;
  letter-spacing: 0.05em;
  color: #ffffff;
  line-height: 1.15;
`;
