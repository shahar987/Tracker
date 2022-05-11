import React, { useState } from 'react';
import { Cell, Pie, PieChart, Sector } from 'recharts';
import { Link } from 'react-router-dom';
import "./HomePage.scss";
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = [
    { name: 'good', value: 70, color: '#00C49F' },
    { name: 'bad', value: 30, color: '#ff726f' },
  ]
  const totalClients = data.map(a => a.value).reduce((a,b) => a+b);

  const renderActiveShape = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill }) => {


    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 15}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          cursor={"pointer"}
        >
        </Sector>

      </g>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  }

  return (
    <main className='homepage'>
      <h1>
        Clients Status
      </h1>

      <PieChart width={400} height={400} className="piechart">
        <text x={200} y={100} textAnchor="middle" dominantBaseline="middle">
        <Link to={ "/clients"}>
          <tspan dy="1em" x="50%" fontSize="80px"> {totalClients} </tspan>
          <tspan dy="1.25em" x="50%" fontSize="40px">Total clients</tspan>
        </Link>
        </text>
        <Pie
          data={data}
          innerRadius={120}
          outerRadius={180}
          fill="#8884d8"
          paddingAngle={4}
          dataKey="value"
          activeIndex={activeIndex}
          onMouseOver={onPieEnter}
          activeShape={renderActiveShape}
          animationDuration={1000}
        >

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color}  />
          ))}

        </Pie>
      </PieChart>
    </main>
  )
}

export default HomePage