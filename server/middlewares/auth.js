import express from "express";
import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("tokenDecode ---> ", tokenDecode);

    if (tokenDecode.Id) {
      req.user = { id: tokenDecode.Id };
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }
    next();
  } catch (error) {
    console.error("Error in userAuth middleware:", error);
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
