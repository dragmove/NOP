import { BREAK_POINTS } from '@client/constants/config';
import { NextPage } from 'next';
import React, {
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import { InputEvent } from '@shared/types/event';

interface Props {}

const AuthPage: NextPage<Props> = (props: Props): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecking, setIsChecking] = useState<boolean>(false);

  useEffect(() => {
    //
  }, []);

  const handleEmailChange = (evt: InputEvent) => {
    const { value } = evt.target;
    setEmail(value);
  };

  const handlePasswordChange = (evt: InputEvent) => {
    const { value } = evt.target;
    setPassword(value);
  };

  const handleSubmitClick = (evt: SyntheticEvent) => {
    //
  };

  return (
    <Section>
      <SectionTitle>Auth</SectionTitle>

      <article>
        <ArticleTitle className="first">AUTH.</ArticleTitle>

        <FormLogin action="/api/auth/login" method="post">
          <fieldset>
            <FieldSetLegend>SignIn</FieldSetLegend>

            {/* 
            {auth.isChecking && (
              <div>
                <AlertChecking>Checking your Information.</AlertChecking>
              </div>
            )}

            {auth.error && (
              <div>
                <AlertError>{auth.error.msg}</AlertError>
              </div>
            )}
            */}

            <div>
              <LabelInput htmlFor="email">Email address</LabelInput>
              <InputEmail
                id="email"
                type="text"
                name="email"
                placeholder="Email address"
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
                disabled={isChecking}
                data-testid="email"
              />
            </div>

            <div>
              <LabelInput htmlFor="password">Password</LabelInput>
              <InputPassword
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange}
                disabled={isChecking}
                data-testid="password"
              />
            </div>

            <div>
              <InputSubmit
                type="submit"
                value="SignIn"
                onClick={handleSubmitClick}
                disabled={isChecking}
              />
            </div>
          </fieldset>
        </FormLogin>

        <GoogleLoginBtnWrap>
          <LinkBtn
            href="/action/auth/google"
            onClick={(e) => {
              // TODO:
              // e.preventDefault();
              // fetch('/action/auth/google')
              //   .then(response => {
              //     console.log('response :', response);
              //   })
              //   .catch(e => {
              //     console.log('error :', e);
              //   });
            }}
          >
            SignIn with Google
          </LinkBtn>
        </GoogleLoginBtnWrap>
      </article>
    </Section>
  );
};

export default AuthPage;

const Section = styled.section`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;

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

const FormLogin = styled.form`
  position: realtive;
  margin: 40px auto 0;
  font-family: 'Montserrat', 'Rubik', 'Carme', 'Lato', Roboto, Ubuntu, san-serif;
  font-size: 12px;
  font-weight: 400;
  width: 314px;
`;

const FieldSetLegend = styled.legend`
  display: block;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  letter-spacing: 0.01em;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

const AlertChecking = styled.p`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  margin-bottom: 20px;
  background-color: #1db954;
  border: 0;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
`;

const AlertError = styled.p`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  margin-bottom: 20px;
  background-color: #f59b23;
  border: 0;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
`;

const LabelInput = styled.label`
  display: block;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  letter-spacing: 0.01em;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

const InputEmail = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  padding: 4px 12px;
  background-color: #fff;
  border: 1px solid #d9dadc;
  font-family: 'Montserrat', 'Rubik', 'Carme', 'Lato', Roboto, Ubuntu, san-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #222326;
  outline: 0;
`;

const InputPassword = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  margin-top: 10px;
  padding: 4px 12px;
  background-color: #fff;
  border: 1px solid #d9dadc;
  font-family: 'Montserrat', 'Rubik', 'Carme', 'Lato', Roboto, Ubuntu, san-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #222326;
  outline: 0;
`;

const InputSubmit = styled.input`
  display: block;
  margin: 24px auto 0;
  padding: 6px 24px 6px;
  background-color: #c23420;
  font-weight: 600;
  font-family: 'Carme', Roboto, Ubuntu, san-serif;
  font-size: 11px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.15em;
  border: 0;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
  outline: 0;

  &:hover {
    background-color: #d32f2f;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.95);
  }
`;

const GoogleLoginBtnWrap = styled.div`
  margin: 40px auto 0;
  text-align: center;
`;

const LinkBtn = styled.a.attrs((props) => ({
  rel: props.rel,
}))`
  display: inline-block;
  margin: 0;
  padding: 6px 24px 6px;
  background-color: #c23420;
  font-weight: 600;
  font-family: 'Carme', Roboto, Ubuntu, san-serif;
  font-size: 11px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.15em;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #d32f2f;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.95);
  }
`;
