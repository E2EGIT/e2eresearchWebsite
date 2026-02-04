import * as Joi from 'joi';
import * as dotenv from 'dotenv';
import { envErrors } from 'src/constant/message.constant';

const ENV = 'development';
dotenv.config({
  path: `./.${ENV}.env`,
});
const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'development')
    .default('production')
    .messages({
      'string.valid': envErrors.NODE_ENV_INVALID,
      'string.required': envErrors.NODE_ENV_REQUIRED,
    }),
  PORT: Joi.number().default(4000),
  MONGODB_URL: Joi.string().required().messages({
    'string.required': envErrors.MONGODB_URL_REQUIRED,
  }),
  MAIL_HOST: Joi.string().required().messages({
    'string.required': envErrors.MAIL_HOST_REQUIRED,
  }),
  QUOTE_REQ_RECEIVER_EMAIL: Joi.string().required().messages({
    'string.required': envErrors.MAIL_RECIPIENT_USER_REQUIRED,
  }),
  DEMO_REQ_RECEIVER_EMAIL: Joi.string().required().messages({
    'string.required': envErrors.MAIL_RECIPIENT_USER_REQUIRED,
  }),
  CONTACT_US_RECEIVER_EMAIL: Joi.string().required().messages({
    'string.required': envErrors.MAIL_RECIPIENT_USER_REQUIRED,
  }),
  MAIL_AUTH_USER: Joi.string().required().messages({
    'string.required': envErrors.MAIL_AUTH_USER_REQUIRED,
  }),
  MAIL_AUTH_PASS: Joi.string().required().messages({
    'string.required': envErrors.MAIL_AUTH_PASSWORD_REQUIRED,
  }),
}).unknown();
const { value: envVars, error } = envValidationSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envConfig = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mailModule: {
    mailHost: envVars.MAIL_HOST,
    mailAuthUser: envVars.MAIL_AUTH_USER,
    mailAuthPass: envVars.MAIL_AUTH_PASS,
    quoteRecipient: envVars.QUOTE_REQ_RECEIVER_EMAIL,
    demoRecipient: envVars.DEMO_REQ_RECEIVER_EMAIL,
    contactRecipient: envVars.CONTACT_US_RECEIVER_EMAIL,
  },
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};

export default envConfig;
