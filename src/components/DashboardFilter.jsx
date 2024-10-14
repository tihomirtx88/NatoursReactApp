import { useTourStats } from "../features/tours/useTourStats";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import Spinner from "./Spinner";

export default function Dashboardfilter(){
    const { tourStats, isLoading, isFetching, error } = useTourStats();
    const stats = tourStats?.data?.stats || [];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    console.log(isFetching, 'isFetcginh');
    // console.log(isLoading, 'isLoading');
  
   if (isLoading) {
    return <Spinner />;  
    }

    if (isFetching && stats.length === 0) { 
      return <Spinner />;
    }

    if (error) {
        return <div>Error loading data</div>;  
    }

    return (
        <div className="dashboard-view">
           {isFetching && <Spinner />}
          <div className="dashboard-view__header">
            <h1>Tour Stats Dashboard</h1>
          </div>

          {/* Bar Chart for Average Price per Difficulty */}
          <div className="dashboard-view__chart-container">
            <h3>Average Price by Difficulty</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgPrice" fill="#8884d8" name="Average Price" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart for Average Rating per Difficulty */}
          <div className="dashboard-view__chart-container">
            <h3>Average Rating by Difficulty</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="avgRating" stroke="#82ca9d" name="Average Rating" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart for Number of Tours per Difficulty */}
          <div className="dashboard-view__chart-container">
            <h3>Number of Tours by Difficulty</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={stats}
                  dataKey="numTours"
                  nameKey="_id"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {stats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Additional Chart: Bar chart for Min and Max Price */}
          <div className="dashboard-view__chart-container">
            <h3>Price Range (Min and Max) by Difficulty</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="minPrice" fill="#FF8042" name="Min Price" />
                <Bar dataKey="maxPrice" fill="#00C49F" name="Max Price" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
};