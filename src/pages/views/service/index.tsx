import ServicePage from "@client/components/pages/service/ServicePage";
import { NextPage } from "next";
import React, { ReactElement } from "react";

interface Props {}

const Service: NextPage<Props> = (props: Props): ReactElement => {
  return <ServicePage />;
};

export default Service;
