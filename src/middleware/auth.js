 const adminAuth =  (req, res, next) => {
    console.log("admin auth is getting checked")
  const token = "xyz";
  const isadminvalid = token === "xyz";
  if(!isadminvalid){
    res.status(401).send("Unauthorised acces");
  }
  else{
    next();
  }
};

 const userAuth =  (req, res, next) => {
    console.log("user auth is getting checked")
  const token = "xyz";
  const isuservalid = token === "xyz";
  if(!isuservalid){
    res.status(401).send("Unauthorised acces");
  }
  else{
    next();
  }
};

module.exports = {
    adminAuth,userAuth
};