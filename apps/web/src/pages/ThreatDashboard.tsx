import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { 
  ShieldAlert, 
  Target, 
  Activity, 
  Zap,
  TrendingUp,
  AlertTriangle,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

const alertData = [
  { name: 'Brute Force', count: 140, color: '#f59e0b' },
  { name: 'MFA Bypass', count: 45, color: '#ef4444' },
  { name: 'Impossible Travel', count: 82, color: '#f59e0b' },
  { name: 'Token Abuse', count: 30, color: '#ef4444' },
  { name: 'Lateral Movement', count: 20, color: '#ef4444' },
];

const riskData = [
  { time: '00:00', score: 45 },
  { time: '04:00', score: 42 },
  { time: '08:00', score: 68 },
  { time: '12:00', score: 85 },
  { time: '16:00', score: 72 },
  { time: '20:00', score: 55 },
];

const KPI_CARDS = [
  { title: 'Active Threats', value: '12', trend: '+2 this hour', color: 'red', icon: ShieldAlert },
  { title: 'Avg Identity Risk', value: '42/100', trend: '-5% vs yesterday', color: 'amber', icon: Target },
  { title: 'Events Analyzed', value: '1.2M', trend: '+142k total', color: 'amber', icon: Activity },
  { title: 'Auto-Containments', value: '28', trend: '100% success rate', color: 'amber', icon: Zap },
];

const ThreatDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Identity Threat Overview</h1>
          <p className="text-slate-400">Real-time detection and correlation of identity-based attack vectors.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Start Hunting
          </button>
          <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Run Simulation
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Detection Breakdown */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Detection Category Volume</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={alertData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {alertData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Risk Trend */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Aggregate Identity Risk</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={riskData}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Critical Alerts Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">High-Priority Alerts</h3>
          <button className="text-amber-500 hover:text-amber-400 text-sm font-medium">View All Alerts</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Alert / Mitigation</th>
                <th className="px-6 py-4 font-semibold">Affected Identity</th>
                <th className="px-6 py-4 font-semibold">Vector / Tactic</th>
                <th className="px-6 py-4 font-semibold">Time</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { title: 'Impossible Travel Detected', user: 'j.doe@corp.com', vector: 'Account Takeover', time: '2m ago', status: 'Blocked', icon: MapPin },
                { title: 'Privilege Escalation Attempt', user: 'svc-backup-01', vector: 'Service Acc Abuse', time: '14m ago', status: 'Analyzing', icon: Zap },
                { title: 'MFA Push Fatigue Pattern', user: 's.smith@corp.com', vector: 'Credential Attack', time: '28m ago', status: 'Awaiting Ack', icon: AlertTriangle },
              ].map((alert) => (
                <tr key={alert.title} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                        <alert.icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-white">{alert.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{alert.user}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {alert.vector}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {alert.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${alert.status === 'Blocked' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      <span className="text-sm font-medium">{alert.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThreatDashboard;
