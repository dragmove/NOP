import { redeem } from "@shared/utils/common";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import ContactCircleIconLinkButton from "./ContactCircleIconLinkButton";

interface PropTypes {
  links: { [key: string]: any };
}

// FIXME: Arrange image path
const githubImgPath = "/assets/img/pinned-octocat.svg";
const linkedInImgPath = "/assets/img/logo-linkedin-white.svg";
const facebookImgPath = "/assets/img/logo-facebook-white.svg";
const twitterImgPath = "/assets/img/logo-twitter-white.svg";

const ContactCircleIconList: FC<PropTypes> = (
  props: PropTypes
): ReactElement => {
  const { links } = props;
  const urls = {
    github: redeem(links?.github, null),
    linkedIn: redeem(links?.linkedIn, null),
    facebook: redeem(links?.facebook, null),
    twitter: redeem(links?.twitter, null),
    blogNaver: redeem(links?.blog?.naver, null),
    blogMedium: redeem(links?.blog?.medium, null),
  };

  return (
    <ListWrap>
      <IconListItem className="first">
        <ContactCircleIconLinkButton
          href={urls.github}
          iconSrc={githubImgPath}
          alt="github"
        />
      </IconListItem>

      <IconListItem>
        <ContactCircleIconLinkButton
          href={urls.linkedIn}
          iconSrc={linkedInImgPath}
          iconWidth={14}
          iconHeight={14}
          iconX={1}
          iconY={1}
          alt="linkedin"
        />
      </IconListItem>

      <IconListItem>
        <ContactCircleIconLinkButton
          href={urls.facebook}
          width={12}
          iconSrc={facebookImgPath}
          iconWidth={13}
          iconHeight={13}
          iconX={-1}
          alt="facebook"
        />
      </IconListItem>

      <IconListItem>
        <ContactCircleIconLinkButton
          href={urls.twitter}
          iconSrc={twitterImgPath}
          iconWidth={13}
          iconHeight={13}
          iconY={1}
          alt="twitter"
        />
      </IconListItem>
    </ListWrap>
  );
};

export default ContactCircleIconList;

const ListWrap = styled.ul`
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 79px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const IconListItem = styled.li`
  position: relative;
  box-sizing: border-box;
  margin-left: 6px;
  float: left;

  &.first {
    margin-left: 0;
  }
`;
