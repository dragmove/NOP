import ProfilePage from "@client/components/pages/profile/ProfilePage";
import { NextPage } from "next";
import React, { ReactElement } from "react";

interface Props {}

const Profile: NextPage<Props> = (props: Props): ReactElement => {
  return <ProfilePage />;
};

export default Profile;
