export const isDevEnv = (): boolean => process.env.NODE_ENV === 'development';
export const isProductionEnv = (): boolean => process.env.NODE_ENV === 'production';
export const isTestEnv = (): boolean => process.env.NODE_ENV === 'test';
