import { Rect } from "@client/components/atoms/shape/Rect";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import ContactCircleIconList from "./ContactCircleIconList";
import ContactLogo from "./ContactLogo";

// FIXME: Arrange image path
const nameCardBgImgPath = "/assets/img/namecard_bg.jpg";

interface Props {
  data: { [key: string]: any };
}

const Contact: FC<Props> = (props: Props): ReactElement => {
  const { data } = props;

  return (
    <Wrap>
      <NameCard>
        <ContactLogo />

        <Address>
          {data?.tel && <Tel href={`tel:${data.tel}`}>{data.tel}</Tel>}

          {data?.email && (
            <Mail href={`mailto:${data.email}`}>{data.email}</Mail>
          )}

          <Rect
            position="absolute"
            top={275}
            left={15}
            width={144}
            height={4}
            backgroundColor="#fff"
          />
        </Address>

        <ContactCircleIconList links={data?.link} />
      </NameCard>
    </Wrap>
  );
};

export default Contact;

const Wrap = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 75px;
`;

const NameCard = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 174px;
  height: 314px;
  background: #000 url(${nameCardBgImgPath}) 0 0 no-repeat;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
`;

const Address = styled.address`
  display: block;
  position: relative;
  top: 0px;
`;

const Tel = styled.a`
  display: block;
  position: absolute;
  top: 237px;
  right: 15px;
  font-size: 11px;
  font-weight: 400;
  font-family: "Rubik", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Mail = styled.a`
  display: block;
  position: absolute;
  top: 252px;
  right: 15px;
  font-size: 10px;
  font-weight: 600;
  font-family: "Montserrat", "Rubik", "Carme", "Lato", Roboto, Ubuntu, san-serif;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;
