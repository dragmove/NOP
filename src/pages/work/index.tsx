import { NextPage } from 'next';
import React, { ReactElement, useEffect } from 'react';

interface Props {}

const Work: NextPage<Props> = (props: Props): ReactElement => {
  useEffect(() => {
    console.log('work');
  }, []);

  return (
    <div>
      <p>Work</p>
    </div>
  );
};

export default Work;
