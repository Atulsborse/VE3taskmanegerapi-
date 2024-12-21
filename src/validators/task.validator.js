import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';

export const taskValidation = [
  body('title').trim().notEmpty().isString(),
  body('description').optional().trim().isString(),
  body('status')
    .optional()
    .isIn(['pending', 'in_progress', 'completed'])
    .withMessage('Status must be pending, in_progress, or completed'),
  validate
];