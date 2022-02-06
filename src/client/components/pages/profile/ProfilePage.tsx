import AnimatedRectLoading from "@client/components/atoms/animatedRectLoading/AnimatedRectLoading";
import { BREAK_POINTS } from "@client/constants/config";
import { fetcher } from "@client/utils/http";
import { truthy } from "@shared/utils/common";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { CareerList } from "./templates/career/CareerList";

function useCareer() {
  const { data, error } = useSWR(
    "https://dragmove.github.io/nop/data/careers.json",
    fetcher
  );

  return {
    careers: data,
    isLoading: !error && !data,
    isError: !!error,
    error: "Failed to load career data",
  };
}

interface Props {}

const ProfilePage: NextPage<Props> = (props: Props): ReactElement => {
  const {
    careers,
    isLoading: isCareersLoading,
    isError: isCareersError,
    error: careersErrorMessage,
  } = useCareer();

  const careersContents = isCareersError ? (
    <Notification>
      <Desc>{careersErrorMessage}</Desc>
    </Notification>
  ) : (
    <CareerList data={careers} />
  );

  // const _ = this,
  //   { careers, awards, profile } = _.props,
  //   hasCareersError = isDefined(careers.error),
  //   isCareersLoading = careers.isLoading,
  //   hasAwardsError = isDefined(awards.error),
  //   isAwardsLoading = awards.isLoading,
  //   isLoadProfileComplete = not(aid.object.isEmpty)(profile);

  // const awardsContents = truthy(hasAwardsError) ? (
  //   <Notification>
  //     <Desc>{awards.error.msg}</Desc>
  //   </Notification>
  // ) : (
  //   <AwardList awards={awards.data} />
  // );

  /*
  const renderContents = ({ data, isLoading, isError, error }) => {
    if (isError) return <div>failed to load data</div>;
    if (isLoading) return <div>loading...</div>;

    return <div>oh</div>;
    // return <div>hello {data}!</div>;
  };
  */

  return (
    <Section>
      <SectionTitle>PROFILE</SectionTitle>

      <article>
        <ArticleTitle className="first">CAREER.</ArticleTitle>
        {truthy(isCareersLoading) ? LoadingWrapHasLoading : ""}
        {careersContents}
      </article>

      {/* 
        <article>
          <ArticleTitle>AWARD.</ArticleTitle>
          {truthy(isAwardsLoading) ? LoadingWrapHasLoading : ""}
          {awardsContents}
        </article>

        <article>
          <ArticleTitle>CONTACT.</ArticleTitle>
          {falsy(isLoadProfileComplete) ? LoadingWrapHasLoading : ""}
          <Contact profile={profile} />
        </article> 
      */}
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
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
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
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  line-height: 20px;
  color: #fff;
  opacity: 0.75;
`;

const LoadingWrapHasLoading = (
  <LoadingWrap>
    <AnimatedRectLoading />
  </LoadingWrap>
);
