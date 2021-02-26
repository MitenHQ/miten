import dotenv from 'dotenv';
dotenv.config();

import './server/initMail';

import { startExpress } from './server/express';
startExpress();
