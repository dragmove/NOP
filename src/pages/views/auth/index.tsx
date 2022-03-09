import AuthPage from "@client/components/pages/auth/AuthPage";
import { NextPage } from "next";
import React, { ReactElement } from "react";

interface Props {}

const Auth: NextPage<Props> = (props: Props): ReactElement => {
  return <AuthPage />;
};

export default Auth;
