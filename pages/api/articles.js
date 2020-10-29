import mockData from '../../src/constants/mockData';

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: mockData });
};
