import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar, 
  Bell,
  Settings,
  Search,
  Plus,
  Filter,
  Download,
  MoreVertical,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Team Members",
      value: "18",
      change: "+3",
      trend: "up",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      title: "Completed Tasks",
      value: "156",
      change: "+23%",
      trend: "up",
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Productivity Score",
      value: "94%",
      change: "+8%",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />
    }
  ];

  const recentProjects = [
    {
      name: "Website Redesign",
      status: "In Progress",
      progress: 75,
      team: 5,
      deadline: "Dec 15, 2024",
      priority: "high"
    },
    {
      name: "Mobile App Development",
      status: "Planning",
      progress: 25,
      team: 8,
      deadline: "Jan 30, 2025",
      priority: "medium"
    },
    {
      name: "Marketing Campaign",
      status: "Completed",
      progress: 100,
      team: 3,
      deadline: "Nov 20, 2024",
      priority: "low"
    },
    {
      name: "Data Migration",
      status: "In Progress",
      progress: 60,
      team: 4,
      deadline: "Dec 10, 2024",
      priority: "high"
    }
  ];

  const tasks = [
    {
      title: "Review design mockups",
      project: "Website Redesign",
      priority: "high",
      dueDate: "Today",
      status: "pending"
    },
    {
      title: "Update project timeline",
      project: "Mobile App Development",
      priority: "medium",
      dueDate: "Tomorrow",
      status: "pending"
    },
    {
      title: "Client presentation prep",
      project: "Marketing Campaign",
      priority: "high",
      dueDate: "Dec 8",
      status: "completed"
    },
    {
      title: "Database optimization",
      project: "Data Migration",
      priority: "low",
      dueDate: "Dec 12",
      status: "pending"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      case 'Planning': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🍉</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Watermelon AI</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-1">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'overview' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'projects' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => setActiveTab('team')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'team' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Team
                </button>
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'analytics' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Analytics
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="w-6 h-6" />
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.title}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Filter className="w-5 h-5" />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      New Project
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-gray-900">{project.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                            {project.priority}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {project.team} members
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.deadline}
                          </span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 p-2 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tasks & Activity */}
          <div className="space-y-8">
            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Tasks</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {tasks.map((task, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {task.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${
                          task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'
                        }`}>
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{task.project}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {task.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <Plus className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-medium text-gray-900">Create New Task</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <Users className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-medium text-gray-900">Invite Team Member</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <Download className="w-5 h-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-900">Export Report</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;