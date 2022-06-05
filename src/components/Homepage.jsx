import React from 'react';
import millify from 'millify';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery();
  if (isFetching) return 'Loading...';

  const globalStats = data.data.stats;

  return (
    <>
      <Title level={2} className="heading">Global crypto stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5"/></Col>
        <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
      </Row>
      <div className='home-heading-container'>
          <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
          <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
          <Title level={2} className="home-title">Latest Crypto news</Title>
          <Title level={3} className="show-more"><Link to='/news'>Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;