import Identicon from "identicon.js";

export default (ctx, inject) => {
  const identicon = (string) =>
    "data:image/png;base64," + new Identicon(string, 420).toString();

  ctx.$identicon = identicon;
  inject("identicon", identicon);
};
