import AnimatedRectLoading from '@client/components/atoms/animatedRectLoading/AnimatedRectLoading';
import { BREAK_POINTS } from '@client/constants/config';
import { useAwards, useCareers, useProfile } from '@client/utils/hooks/data';
import { truthy } from '@shared/utils/common';
import { NextPage } from 'next';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import AwardList from './templates/award/AwardList';
import CareerList from './templates/career/CareerList';
import Contact from './templates/contact/Contact';

interface Props {}

const ProfilePage: NextPage<Props> = (props: Props): ReactElement => {
  const {
    data: careers,
    isLoading: isCareersLoading,
    error: careersError,
  } = useCareers();

  const {
    data: awards,
    isLoading: isAwardsLoading,
    error: awardsError,
  } = useAwards();

  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useProfile();

  // TODO: 중복 코드 줄이기
  const careersContents = careersError ? (
    <Notification>
      <Desc>{'Failed to load career data.'}</Desc>
    </Notification>
  ) : (
    <CareerList data={careers} />
  );

  const awardsContents = awardsError ? (
    <Notification>
      <Desc>{'Failed to load award data.'}</Desc>
    </Notification>
  ) : (
    <AwardList data={awards} />
  );

  const profileContents = profileError ? (
    <Notification>
      <Desc>{'Failed to load profile data.'}</Desc>
    </Notification>
  ) : (
    <Contact data={profile} />
  );

  return (
    <Section>
      <SectionTitle>PROFILE</SectionTitle>

      <article>
        <ArticleTitle className="first">CAREER.</ArticleTitle>
        {truthy(isCareersLoading) && AnimatedRectLoadingWrap}
        {careersContents}
      </article>

      <article>
        <ArticleTitle>AWARD.</ArticleTitle>
        {truthy(isAwardsLoading) && AnimatedRectLoadingWrap}
        {awardsContents}
      </article>

      <article>
        <ArticleTitle>CONTACT.</ArticleTitle>
        {truthy(isProfileLoading) ? AnimatedRectLoadingWrap : ''}
        {profileContents}
      </article>
    </Section>
  );
};

export default ProfilePage;

const Section = styled.section`
  display: none;
  position: relative;

  @media only screen and (min-width: ${BREAK_POINTS.DESKTOP}px) {
    display: block;
  }
`;

const SectionTitle = styled.h2`
  display: none;
`;

const ArticleTitle = styled.h3`
  width: 180px;
  margin: 150px auto 0;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Montserrat', 'Rubik', 'Carme', 'Lato', Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
  text-shadow: 4px 3px 1px rgba(255, 255, 255, 0.5);
  transform: skewX(-10deg);

  &.first {
    margin-top: 84px;
  }
`;

const LoadingWrap = styled.div`
  position: relative;
  margin: 45px auto 0;
  width: 40px;
`;

const Notification = styled.article`
  position: relative;
  margin-top: 40px;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const Desc = styled.p`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Montserrat', 'Rubik', 'Carme', 'Lato', Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  line-height: 20px;
  color: #fff;
  opacity: 0.75;
`;

const AnimatedRectLoadingWrap = (
  <LoadingWrap>
    <AnimatedRectLoading />
  </LoadingWrap>
);
