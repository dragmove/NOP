import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://dragmove.github.io/nop/data/careers.json',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 4,
            company: '엔씨소프트',
            company_eng: 'ncsoft',
            position: 'Front-end Developer',
            date: '2014.07 - 2019.08',
          },
        ]),
      );
    },
  ),

  /*
  // TODO:
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),
  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
  */
];
