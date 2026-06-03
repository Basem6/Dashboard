import { useEffect, useRef } from "react";
import {
  AccumulationChart,
  AccumulationLegend,
  AccumulationTooltip,
  Category,
  Chart,
  Legend,
  PieSeries,
  SplineAreaSeries,
  SplineSeries,
  Tooltip,
} from "@syncfusion/ej2-charts";

Chart.Inject(SplineSeries, SplineAreaSeries, Category, Legend, Tooltip);
AccumulationChart.Inject(PieSeries, AccumulationLegend, AccumulationTooltip);

const performanceSeries = [
  [
    { x: "1", y: 1 },
    { x: "2", y: 3 },
    { x: "3", y: 2.5 },
    { x: "4", y: 3.8 },
    { x: "5", y: 3 },
    { x: "6", y: 4 },
  ],
  [
    { x: "1", y: 1.5 },
    { x: "2", y: 3.4 },
    { x: "3", y: 3 },
    { x: "4", y: 4.2 },
    { x: "5", y: 4.5 },
    { x: "6", y: 3.8 },
  ],
  [
    { x: "1", y: 2 },
    { x: "2", y: 3.9 },
    { x: "3", y: 3.4 },
    { x: "4", y: 4.5 },
    { x: "5", y: 4 },
    { x: "6", y: 4.9 },
  ],
];

const fundingSeries = [
  [
    { x: "1", y: 2 },
    { x: "2", y: 2.5 },
    { x: "3", y: 2.8 },
    { x: "4", y: 3 },
    { x: "5", y: 3.4 },
    { x: "6", y: 3.7 },
    { x: "6", y: 4 },
  ],
  [
    { x: "1", y: 3.6 },
    { x: "2", y: 4 },
    { x: "3", y: 3.5 },
    { x: "4", y: 4.2 },
    { x: "5", y: 5 },
    { x: "6", y: 5.8 },
  ],
];

const pieData = [
  { x: "Merit-Based $180", y: 40, fill: "#8c4aff" },
  { x: "Need-Based $23", y: 35, fill: "#2a8aff" },
  { x: "Departmental $55", y: 15, fill: "#08bfd3" },
  { x: "Other $32%", y: 10, fill: "#b6c5d1" },
];

function useSplineChart(ref, mode) {
  useEffect(() => {
    if (!ref.current) return undefined;

    const isFunding = mode === "funding";
    const source = isFunding ? fundingSeries : performanceSeries;
    const type = isFunding ? "SplineArea" : "Spline";
    const colors = ["#0fa3ff", "#8b27fe", "#273dfe"];
    const borders = ["#56fffc", "#8b27fe", "#273dfe"];

    const chart = new Chart({
      background: "transparent",
      primaryXAxis: {
        valueType: "Category",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
      },
      primaryYAxis: {
        minimum: 0,
        maximum: 5,
        startFromZero: 0,
        interval: 1,
        majorGridLines: { width: 0.1 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
      },
      chartArea: { border: { width: 0 } },
      series: source.map((dataSource, index) => ({
        type,
        dataSource,
        xName: "x",
        yName: "y",
        fill: colors[index],
        marker: {
          visible: true,
          width: isFunding ? 3 : 6,
          height: isFunding ? 3 : 6,
          shape: "Circle",
          fill: colors[index],
          border: { color: colors[index], width: isFunding ? 0.4 : 1 },
        },
        width: isFunding ? 0.4 : 2,
        opacity: isFunding ? 0.4 : 1,
        border: { color: borders[index], width: isFunding ? 0.8 : 3 },
      })),
    });

    chart.appendTo(ref.current);
    return () => chart.destroy();
  }, [mode, ref]);
}

function usePieChart(ref) {
  useEffect(() => {
    if (!ref.current) return undefined;

    const chart = new AccumulationChart({
      series: [
        {
          dataSource: pieData,
          xName: "x",
          yName: "y",
          innerRadius: "60%",
          dataLabel: { visible: true, position: "Inside" },
          explode: true,
          explodeOffset: "10%",
          border: { width: 4, color: "#0f1219", dashArray: "4,2" },
          pointColorMapping: "fill",
        },
      ],
      title: "",
      legendSettings: { visible: true },
      tooltip: { enable: true },
    });

    chart.appendTo(ref.current);
    return () => chart.destroy();
  }, [ref]);
}

export function SplineChart({ mode = "performance" }) {
  const chartRef = useRef(null);
  useSplineChart(chartRef, mode);
  return <div ref={chartRef} className="min-h-56" />;
}

export function PieChart() {
  const chartRef = useRef(null);
  usePieChart(chartRef);
  return <div ref={chartRef} className="min-h-56" />;
}
