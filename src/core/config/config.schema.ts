import * as Joi from 'joi'

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'local').default('development'),
  LOG_DIR: Joi.string().default('./log'),
});
