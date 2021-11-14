import React from 'react';
import ReactECharts from 'echarts-for-react';

const Home = ({ chartOption }) => (
  <div>
    <ReactECharts
      option={chartOption}
      notMerge={true}
      lazyUpdate={true}
      style={{ width: '100vw' }}
    />
  </div>
);

export default Home;
