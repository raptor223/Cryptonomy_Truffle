module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    develop: {
      port: 8545
    },
    development: {
      host: "104.40.200.146",
      port: 8545,
      network_id: "4854"
    },

    test: {
      host: "104.40.200.146",
      port: 8546,
      network_id: "4855",
      gas: 4700000,
      from: "0xd2d0123672ceedff415697d2fde38e1371271858"
    }
  }
};
