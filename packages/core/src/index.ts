export const log = (message: any, ...rest: any[]) => {
  console.log(message, ...rest);
};

export const warn = (message: any, ...rest: any[]) => {
  console.warn(message, ...rest);
};

export const error = (message: any, ...rest: any[]) => {
  console.error(message, ...rest);
};

export const packageName = "core";
