import React from 'react';

/* Components */
import ErrorWarning from './ErrorWarning';
import LoadingCard from './LoadingCard';

/* Charts */
import PieChart from './charts/PieChart';
import ColumnChart from './charts/ColumnChart';

/* Utilities */
import { APIRequest } from '../apis/api';
import { Col, Row } from 'antd';

const AuthorsTabOnCompendium = () => {
  const [state] = APIRequest('/app/compendium?data=authors');

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row gutter={[15, 15]}>
      <Col xs={24} xl={12}>
        <PieChart data={state.data.data.sex} title="Sexo" type="compendium" />
      </Col>
      <Col xs={24} xl={12}>
        <PieChart
          data={state.data.data.age}
          title="Rango de edad"
          type="compendium"
        />
      </Col>
      <Col xs={24} xl={12}>
        <PieChart
          data={state.data.data.rank}
          title="Categoría Minciencias "
          type="compendium"
        />
      </Col>
      <Col xs={24} xl={12}>
        <ColumnChart
          data={state.data.data.scholarity}
          title="Nivel de escolaridad"
          type="compendium"
        />
      </Col>
    </Row>
  );
};

export default AuthorsTabOnCompendium;
