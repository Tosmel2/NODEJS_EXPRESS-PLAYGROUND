import getToken from "../util/gettoken.js";
import verifytoken from "../util/verifytoken.js";

const isLogin = (req, res, next) => {

  const token = getToken(req);

  const userDecoded = verifytoken(token);
  req.userAuth = userDecoded.id;

  if (!userDecoded) {
    return res.json({
      status: "error",
      message: "You are not authenticated",
    });
  } else {
    next();
  }
}

export default isLogin;