import jwt from 'jsonwebtoken';
import logger from '#config/logger.js';

const JWT_SECRET =
  process.env.JWT_SECRET || 'your-secret-key-please-change-in-producation';
const JWT_EXPRIRES = 'id';

export const jwttoken = {
  sign: payload => {
    try {
      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPRIRES });
    } catch (e) {
      logger.error('Faild to authenticte token', e);
      throw new Error('Faild to authenticte token');
    }
  },

  verify: token => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      logger.error('Faild to authenticte token', e);
      throw new Error('Faild to authenticte token');
    }
  },
};
