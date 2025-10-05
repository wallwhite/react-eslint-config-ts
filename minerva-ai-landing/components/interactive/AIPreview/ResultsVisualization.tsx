'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { ChartData } from '@/lib/types';

interface ResultsVisualizationProps {
  chartData: any;
}

export const ResultsVisualization = ({ chartData }: ResultsVisualizationProps) => {
  const data = chartData as ChartData;

  if (data.type === 'line') {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <h3 className="mb-4 text-sm font-medium text-zinc-300">{data.config.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey={data.config.xAxisKey} stroke="#71717a" tick={{ fill: '#a1a1aa' }} />
            <YAxis stroke="#71717a" tick={{ fill: '#a1a1aa' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid #3f3f46',
                borderRadius: '0.5rem',
                color: '#e4e4e7',
              }}
            />
            {data.config.lines?.map((line: any) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.stroke}
                strokeWidth={2}
                dot={false}
                name={line.name}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (data.type === 'bar') {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <h3 className="mb-4 text-sm font-medium text-zinc-300">{data.config.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis type="number" stroke="#71717a" tick={{ fill: '#a1a1aa' }} />
            <YAxis dataKey={data.config.xAxisKey} type="category" stroke="#71717a" tick={{ fill: '#a1a1aa' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid #3f3f46',
                borderRadius: '0.5rem',
                color: '#e4e4e7',
              }}
            />
            <Bar dataKey={data.config.dataKey || 'volume'}>
              {data.data.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.type === 'buy' ? '#10b981' : entry.type === 'sell' ? '#ef4444' : '#6366f1'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (data.type === 'heatmap') {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <h3 className="mb-4 text-sm font-medium text-zinc-300">{data.config.title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey={data.config.xAxisKey} stroke="#71717a" tick={{ fill: '#a1a1aa' }} />
            <YAxis stroke="#71717a" tick={{ fill: '#a1a1aa' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid #3f3f46',
                borderRadius: '0.5rem',
                color: '#e4e4e7',
              }}
            />
            <Bar dataKey={data.config.yAxisKey || 'performance'}>
              {data.data.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.performance > 0 ? '#10b981' : '#ef4444'}
                  opacity={0.8}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
};
