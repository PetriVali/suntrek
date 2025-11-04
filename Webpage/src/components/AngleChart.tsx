import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateData = () => {
  const hours = Array.from({ length: 11 }, (_, i) => i + 8);
  return hours.map((hour) => ({
    time: `${hour}:00`,
    azimuth: 90 + (hour - 12) * 15 + Math.random() * 5,
    elevation: Math.max(10, 60 * Math.sin(((hour - 6) * Math.PI) / 12)),
  }));
};

const data = generateData();

export const AngleChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Panel Position Tracking</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            label={{ value: 'Angle (°)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Line
            type="monotone"
            dataKey="azimuth"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
            name="Azimuth"
            dot={{ fill: 'hsl(var(--secondary))' }}
          />
          <Line
            type="monotone"
            dataKey="elevation"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            name="Elevation"
            dot={{ fill: 'hsl(var(--primary))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
