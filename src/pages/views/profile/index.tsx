import { NextPage } from 'next';
import React, { ReactElement, useEffect } from 'react';

interface Props {}

const Profile: NextPage<Props> = (props: Props): ReactElement => {
  useEffect(() => {
    console.log('Profile');
  }, []);

  return (
    <div>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
