import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const generateData = () => {
  const hours = Array.from({ length: 11 }, (_, i) => i + 8); // 8:00 to 18:00
  return hours.map((hour) => ({
    time: `${hour}:00`,
    intensity: Math.max(0, 100 * Math.sin(((hour - 6) * Math.PI) / 12) + Math.random() * 10),
    angle: 90 + (hour - 12) * 15,
  }));
};

const data = generateData();

export const SolarChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Light Intensity Throughout the Day</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            label={{ value: 'Intensity (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Area
            type="monotone"
            dataKey="intensity"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#colorIntensity)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
