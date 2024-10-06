export const onRequestPost= async (context) => {
  return context.env.CONTACTMAIL.fetch(context.request);
};