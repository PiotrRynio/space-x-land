import { rest } from 'msw';
import { launchesHandlerResponse } from './responses/launches/launchesHandlerResponse';

const API_URL = 'https://api.spacex.land/rest';

const launchesHandler = rest.get(`${API_URL}/launches`, (req, res, ctx) => {
  const fields = req.url.searchParams.get('limit');
  if (fields === '12') {
    return res(ctx.status(200), ctx.json(launchesHandlerResponse));
  }
  return res(ctx.status(404));
});

export const handlers = [launchesHandler];
