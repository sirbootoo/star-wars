module.exports = {
  HOST: "freedb.tech",
  USER: "freedbtech_maxdb",
  PASSWORD: "q1w2e3r4",
  DB: "freedbtech_maxTestDBz",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
