import MainPage from "@client/components/pages/main/MainPage";
import { NextPage } from "next";
import React, { ReactElement } from "react";

interface Props {}

const Index: NextPage<Props> = (props: Props): ReactElement => {
  return <MainPage />;
};

export default Index;
