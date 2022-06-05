import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Input, Col } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  return (
    <div>
      <>
        <Row gutters={[32, 32]} className="crypto-card-container">
          {cryptos.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank} ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
};

export default Cryptocurrencies;