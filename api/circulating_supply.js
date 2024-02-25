const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const totalSupply = await getTotalSupply();
    const burnedSupply = await getBurnedSupply();
    const circulatingSupply = totalSupply - burnedSupply;
    res.status(200).send({
      status: '1',
      message: 'OK',
      result: String(circulatingSupply),
    });
  } catch (err) {
    res.status(500).send({
      status: '0',
      message: 'Error fetching data',
      result: null,
    });
  }
};

async function getTotalSupply() {
  const response = await axios.get(
    'https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x922722e9ef614ec9a3e94b78496e92abfbb5a624&apikey=<BSCAPIKEY>'
  );
  return BigInt(response.data.result);
}

async function getBurnedSupply() {
  const response = await axios.get(
    'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x922722e9ef614ec9a3e94b78496e92abfbb5a624&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=<BSCAPIKEY>'
  );
  return BigInt(response.data.result);
}
