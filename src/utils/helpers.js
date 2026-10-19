// Helper utilities - maintained by @kakavindu16-gif
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();