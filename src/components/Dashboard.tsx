import React from 'react';
import { Plus, Package, Clock, Zap, Palette, Share2, TrendingUp } from 'lucide-react';
import { Project } from '../types';

interface DashboardProps {
  onCreateNew: () => void;
  onOpenProject: (project: Project) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onCreateNew, onOpenProject }) => {
  const recentProjects: Project[] = [
    {
      id: '1',
      name: 'Summer Collection Launch',
      lastModified: new Date('2024-01-15'),
      template: {
        id: 'template-1',
        name: 'Product Showcase',
        category: 'product',
        dimensions: { width: 1080, height: 1080 },
        preview: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      thumbnail: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Holiday Campaign',
      lastModified: new Date('2024-01-10'),
      template: {
        id: 'template-2',
        name: 'Social Media Post',
        category: 'social',
        dimensions: { width: 1080, height: 1080 },
        preview: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      thumbnail: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Brand Identity Package',
      lastModified: new Date('2024-01-08'),
      template: {
        id: 'template-3',
        name: 'Brand Kit',
        category: 'brand',
        dimensions: { width: 1200, height: 800 },
        preview: 'https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      thumbnail: 'https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const quickActions = [
    {
      title: 'Product Photo',
      description: 'Transform product photos with AI',
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      action: onCreateNew
    },
    {
      title: 'Brand Design',
      description: 'Create consistent brand visuals',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      action: onCreateNew
    },
    {
      title: 'Social Posts',
      description: 'Design social media content',
      icon: Share2,
      color: 'from-green-500 to-emerald-500',
      action: onCreateNew
    },
    {
      title: 'AI Enhancement',
      description: 'Enhance with AI tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      action: onCreateNew
    }
  ];

  const stats = [
    { label: 'Projects Created', value: '24', icon: Package },
    { label: 'AI Enhancements', value: '156', icon: Zap },
    { label: 'Social Posts', value: '89', icon: Share2 },
    { label: 'Brand Assets', value: '34', icon: Palette }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">BrandForge</h1>
                <p className="text-gray-600">AI-Powered Brand & Product Design Studio</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>All systems operational</span>
              </div>
              <button
                onClick={onCreateNew}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium"
              >
                <Plus className="w-5 h-5" />
                <span>Create New Project</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.title}
                  onClick={action.action}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Projects */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              View All
            </button>
          </div>
          
          {recentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => onOpenProject(project)}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {project.template.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{project.lastModified.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
              <p className="text-gray-600 mb-6">Start creating amazing product visuals and brand content</p>
              <button
                onClick={onCreateNew}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium"
              >
                Create Your First Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};