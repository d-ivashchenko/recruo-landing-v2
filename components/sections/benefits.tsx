"use client";

import { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Clock, Lightbulb, Target, TrendingUp, CheckCircle2, Award, PieChart as PieChartIcon, DollarSign } from 'lucide-react';

// More detailed time data showing specific stages of the hiring process
const timeData = [
  { name: 'Resume Screening', traditional: 14, recruo: 2 },
  { name: 'Initial Interview', traditional: 10, recruo: 3 },
  { name: 'Technical Assessment', traditional: 7, recruo: 5 },
  { name: 'Final Decision', traditional: 5, recruo: 3 },
];

// Calculate total time
const traditionalTotal = timeData.reduce((sum, item) => sum + item.traditional, 0);
const recruoTotal = timeData.reduce((sum, item) => sum + item.recruo, 0);

// More realistic quality data
const qualityData = [
  { name: 'Technical Skills Match', traditional: 68, recruo: 85, industry: 72 },
  { name: 'Cultural Fit', traditional: 65, recruo: 80, industry: 70 },
  { name: 'Job Retention (1yr)', traditional: 72, recruo: 85, industry: 76 },
  { name: 'Time-to-Productivity', traditional: 62, recruo: 78, industry: 67 },
];

// ROI data with adjusted formatting for multi-line labels
const roiData = [
  { name: 'Recruiter Hours_Saved', value: 120 },
  { name: 'Engineering_Hours Saved', value: 80 },
  { name: 'Cost Per Hire_Reduction', value: 35 },
  { name: 'Productivity_Gain', value: 22 },
];

const ROI_COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Benefit({ icon, title, description }: BenefitProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 h-12 w-12 rounded-full bg-blue-950/50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

// Custom tooltip for time savings chart
const TimeTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const recruoValue = payload[0].value;
    const traditionalValue = payload[1].value;
    const percentFaster = Math.round(100 - (recruoValue / traditionalValue * 100));
    
    return (
      <div className="bg-gray-900 p-4 rounded-md shadow-md border border-gray-800">
        <p className="text-white font-semibold text-lg mb-1">{label}</p>
        <p className="text-blue-400 font-medium">Recruo: {recruoValue} days</p>
        <p className="text-gray-300 mb-1">Traditional: {traditionalValue} days</p>
        <p className="text-green-400 font-medium">{percentFaster}% faster</p>
      </div>
    );
  }
  return null;
};

// Custom tooltip for quality chart
const QualityTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const recruoValue = payload[2]?.value;
    const traditionalValue = payload[0]?.value;
    const industryValue = payload[1]?.value;
    const improvement = recruoValue && traditionalValue ? Math.round(recruoValue - traditionalValue) : null;
    
    return (
      <div className="bg-gray-900 p-4 rounded-md shadow-md border border-gray-800">
        <p className="text-white font-semibold text-lg mb-1">{label}</p>
        <p className="text-blue-400 font-medium">Recruo: {recruoValue}%</p>
        <p className="text-gray-400">Industry Average: {industryValue}%</p>
        <p className="text-gray-300 mb-1">Traditional: {traditionalValue}%</p>
        {improvement && <p className="text-green-400 font-medium">{improvement}% improvement</p>}
      </div>
    );
  }
  return null;
};

// Custom tooltip for ROI chart
const ROITooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0]?.value;
    
    return (
      <div className="bg-gray-900 p-4 rounded-md shadow-md border border-gray-800">
        <p className="text-white font-semibold text-lg mb-1">{label}</p>
        <p className="text-blue-400 font-medium">{value}% improvement</p>
      </div>
    );
  }
  return null;
};

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75;
      
      if (isVisible) {
        containerRef.current.classList.add('animate-fade-up');
        containerRef.current.classList.remove('opacity-0');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="benefits" className="py-24 bg-gray-950">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4 text-white">Why Choose Recruo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your technical hiring process with significant time savings, improved candidate quality, 
            and data-driven decision making backed by real results.
          </p>
        </div>
        
        <div ref={containerRef} className="opacity-0 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-6 text-white">
                Cut Hiring Time by <span className="text-blue-400">{Math.round(100 - (recruoTotal / traditionalTotal * 100))}%</span>
              </h3>
              <p className="text-gray-300 mb-8">
                Accelerate every stage of your technical hiring pipeline while maintaining 
                or improving the quality of candidates through intelligent automation.
              </p>
              
              <div className="space-y-8 mb-8">
                <Benefit 
                  icon={<Clock className="h-6 w-6 text-accent" />}
                  title="Faster Screening"
                  description="Process hundreds of applications in hours instead of days, reducing screening time by up to 85%."
                />
                <Benefit 
                  icon={<CheckCircle2 className="h-6 w-6 text-accent" />}
                  title="Intelligent Interviews"
                  description="Our AI-powered technical interviews eliminate scheduling delays and reduce interview time by 70%."
                />
                <Benefit 
                  icon={<TrendingUp className="h-6 w-6 text-accent" />}
                  title="Streamlined Workflow"
                  description="Integrate seamlessly with your existing ATS and reduce overall time-to-hire from 36 to 13 days on average."
                />
              </div>
            </div>
            
            <Card className="p-6 bg-gray-900 border-gray-800">
              <h4 className="text-lg font-medium mb-4 text-white">Time Spent per Hiring Stage (Days)</h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={timeData}
                    margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} stroke="#666" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#aaa' }}
                      tickLine={{ stroke: '#666' }}
                      axisLine={{ stroke: '#666' }}
                      height={50}
                      tickMargin={10}
                    />
                    <YAxis 
                      tick={{ fill: '#aaa' }}
                      tickLine={{ stroke: '#666' }}
                      axisLine={{ stroke: '#666' }}
                    />
                    <Tooltip content={<TimeTooltip />} />
                    <Legend wrapperStyle={{ paddingTop: 15 }} />
                    <Bar dataKey="recruo" name="With Recruo" fill="#3B82F6" barSize={20} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="traditional" name="Traditional Process" fill="#94A3B8" barSize={20} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-gray-400 mt-2">
                Based on average data from 200+ technical hiring processes
              </p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <Card className="p-6 bg-gray-900 border-gray-800">
                <h4 className="text-lg font-medium mb-4 text-white">Candidate Quality Assessment (%)</h4>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={qualityData}
                      margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} stroke="#666" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#aaa' }}
                        tickLine={{ stroke: '#666' }}
                        axisLine={{ stroke: '#666' }}
                        height={50}
                        tickMargin={10}
                        interval={0}
                      />
                      <YAxis 
                        domain={[50, 100]} 
                        tick={{ fill: '#aaa' }}
                        tickLine={{ stroke: '#666' }}
                        axisLine={{ stroke: '#666' }}
                      />
                      <Tooltip content={<QualityTooltip />} />
                      <Legend wrapperStyle={{ paddingTop: 15 }} />
                      <Line 
                        type="monotone" 
                        dataKey="traditional" 
                        name="Traditional Hiring"
                        stroke="#94A3B8" 
                        strokeWidth={2} 
                        dot={{ r: 4, fill: "#94A3B8", strokeWidth: 0 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="industry" 
                        name="Industry Average"
                        stroke="#64748B" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ r: 4, fill: "#64748B", strokeWidth: 0 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="recruo" 
                        name="With Recruo"
                        stroke="#3B82F6" 
                        strokeWidth={3} 
                        dot={{ r: 5, fill: "#3B82F6", strokeWidth: 0 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">
                  Based on post-hire assessments and performance reviews
                </p>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-outfit font-bold mb-6 text-white">
                Enhance Candidate Quality
              </h3>
              <p className="text-gray-300 mb-8">
                Make consistently better hiring decisions with objective technical 
                assessments, sophisticated matching algorithms, and data-driven insights.
              </p>
              
              <div className="space-y-8">
                <Benefit 
                  icon={<Lightbulb className="h-6 w-6 text-accent" />}
                  title="Objective Evaluation"
                  description="Eliminate unconscious bias with standardized technical assessments that improve skill matching by 17% on average."
                />
                <Benefit 
                  icon={<Target className="h-6 w-6 text-accent" />}
                  title="Precise Matching"
                  description="Our AI algorithms identify candidates who truly match your specific technical requirements, improving team integration by 15%."
                />
                <Benefit 
                  icon={<Award className="h-6 w-6 text-accent" />}
                  title="Better Retention"
                  description="Companies using Recruo see a 13% increase in one-year retention rates for technical hires compared to traditional methods."
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-6 text-white">
                Measurable Return on Investment
              </h3>
              <p className="text-gray-300 mb-8">
                Recruo delivers tangible business benefits beyond just faster hiring, with significant 
                cost savings and productivity improvements across your organization.
              </p>
              
              <div className="space-y-8">
                <Benefit 
                  icon={<DollarSign className="h-6 w-6 text-accent" />}
                  title="Reduce Hiring Costs"
                  description="Cut cost-per-hire by 35% through more efficient processes and reduced reliance on external recruiters."
                />
                <Benefit 
                  icon={<PieChartIcon className="h-6 w-6 text-accent" />}
                  title="Reclaim Engineering Time"
                  description="Free up 80+ hours of senior engineering time per hiring cycle previously spent on technical interviews."
                />
                <Benefit 
                  icon={<TrendingUp className="h-6 w-6 text-accent" />}
                  title="Faster Onboarding"
                  description="New hires selected through Recruo reach full productivity 22% faster due to better skill alignment."
                />
              </div>
            </div>
            
            <Card className="p-6 bg-gray-900 border-gray-800">
              <h4 className="text-lg font-medium mb-4 text-white">Business Impact (%)</h4>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={roiData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.1} stroke="#666" />
                    <XAxis 
                      type="number" 
                      domain={[0, 120]} 
                      tick={{ fill: '#aaa' }}
                      tickLine={{ stroke: '#666' }}
                      axisLine={{ stroke: '#666' }}
                      ticks={[0, 30, 60, 90, 120]}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={80}
                      tick={(props) => {
                        const { x, y, payload } = props;
                        const parts = payload.value.split('_');
                        return (
                          <g transform={`translate(${x},${y})`}>
                            <text x={-10} y={-5} dy={16} textAnchor="end" fill="#aaa" fontSize={12}>
                              {parts[0]}
                            </text>
                            {parts.length > 1 && (
                              <text x={-10} y={15} dy={16} textAnchor="end" fill="#aaa" fontSize={12}>
                                {parts[1]}
                              </text>
                            )}
                          </g>
                        );
                      }}
                      tickLine={{ stroke: '#666' }}
                      axisLine={{ stroke: '#666' }}
                    />
                    <Tooltip content={<ROITooltip />} />
                    <Bar dataKey="value" name="Improvement" radius={[0, 4, 4, 0]}>
                      {roiData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={ROI_COLORS[index % ROI_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-gray-400 mt-2">
                Based on average improvements reported by customers after 6 months
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}