import React, { useEffect } from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';

/* Components */
import CallsTableMin from '../CallsTableMin';
import CallsTableNih from '../CallsTableNih';
import CallsTablePfizer from '../CallsTablePfizer';
import CallsTableUkri from '../CallsTableUkri';

/* UI Library Components */
import { Col, Divider, Row, Typography } from 'antd';

/* logotypes */
import logo_sds_color from '../../media/logo_sds_color.svg';
import grants_logo from '../../media/grants-logo.png';
import logo_minciencias from '../../media/logo-minciencias.png';
import pfizer from '../../media/pfizer.svg';
import ukri from '../../media/UKRI.svg';

/* UI library Sub-components */
const { Title } = Typography;

const Calls = ({ core }) => {
  useEffect(() => {
    document.title = 'Convocatorias | SALUDATA';
  }, []);

  return (
    <Row justify="center" style={{ marginTop: '50px' }}>
      <Col xxl={20} md={24}>
        <Title className="bold" level={1}>
          Directorio de convocatorias Públicas
        </Title>
        <Title level={5} style={{ color: '#515152' }}>
          Consulte aquí las convocatorias locales, nacionales e internacionales
          que financian o apoyan proyectos de investigación en salud.
        </Title>
        <Divider />
        <Title className="bold" level={3}>
          Secretaría Distrital de Salud
        </Title>
        <img
          className="calls__logo-container"
          src={logo_sds_color}
          alt="Logotipo Secretaría de Salud de Bogotá"
        />
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <TwitterTweetEmbed
          tweetId={'1638254153192591361'} 
        />
        </div>
        <Divider />
        <Title className="bold" level={3}>
          NIH Grants & Funding
        </Title>
        <img
          className="calls__logo-container"
          src={grants_logo}
          alt="Logotipo Grants & Funding"
        />
        <CallsTableNih />
        <Divider />
        <Title className="bold" level={3}>
          Pfizer
        </Title>
        <img
          className="calls__logo-container"
          src={pfizer}
          alt="Logotipo Pfizer"
        />
        <CallsTablePfizer />
        <Divider />
        <Title className="bold" level={3}>
          UK Research and Innovation - UKRI
        </Title>
        <img
          className="calls__logo-container"
          src={ukri}
          alt="Logotipo UK Research and Innovation"
        />
        <CallsTableUkri />
        <Divider />
        <Title className="bold" level={3}>
          Minciencias
        </Title>
        <img
          className="calls__logo-container"
          src={logo_minciencias}
          alt="Logotipo Minciencias"
        />
        <CallsTableMin />
        <Divider />
      </Col>
    </Row>
  );
};

export default Calls;
