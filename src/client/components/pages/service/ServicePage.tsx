import AnimatedRectLoading from "@client/components/atoms/animatedRectLoading/AnimatedRectLoading";
import { BREAK_POINTS } from "@client/constants/config";
import { fetcher } from "@client/utils/http";
import { truthy } from "@shared/utils/common";
import { NextPage } from "next";
import { ReactElement } from "react";
import styled from "styled-components";
import useSWR from "swr";
import ServiceList from "./templates/ServiceList";

// FIXME: Define type
function useServices() {
  const { data, error } = useSWR(
    "https://dragmove.github.io/nop/data/services.json",
    fetcher
  );

  return {
    services: data,
    isLoading: !error && !data,
    isError: !!error,
    error: "Failed to load datas",
  };
}

interface Props {}

const ServicePage: NextPage<Props> = (props: Props): ReactElement => {
  const {
    services,
    isLoading: isServicesLoading,
    isError: isServicesError,
    error: servicesErrorMessage,
  } = useServices();

  const servicesContents = isServicesError ? (
    <Notification>
      <Desc>{servicesErrorMessage}</Desc>
    </Notification>
  ) : (
    <ServiceList data={services} />
  );

  return (
    <Section>
      <SectionTitle>SERVICE</SectionTitle>

      <article>
        <ArticleTitle className="first">SERVICE.</ArticleTitle>
        {truthy(isServicesLoading) ? AnimatedRectLoadingWrap : ""}
        {servicesContents}
      </article>
    </Section>
  );
};

export default ServicePage;

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
  margin: 150px auto 0;
  width: 180px;
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

const AnimatedRectLoadingWrap = (
  <LoadingWrap>
    <AnimatedRectLoading />
  </LoadingWrap>
);
