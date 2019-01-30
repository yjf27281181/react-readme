if (process.env.NODE_ENV === "development") {
  module.exports = {
    serverURL: "http://localhost:3333/api"
  };
  
} else {
  
  module.exports = {
    serverURL: "http://34.229.101.241:3333/api"
  };
}
