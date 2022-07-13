/**
 * @description host 配置
 * @author 闫强
 */

import { isDev, isPrd, isTest } from '../utils/env';

// API host
let APIHost = ''; // 默认为本地运行 mock
if (isDev) APIHost = 'http://120.55.193.14:3030/';
if (isPrd) APIHost = 'http://120.55.193.14:3030/';
if (isTest) APIHost = 'http://120.55.193.14:3030/';

export { APIHost };
