import React, { useState, useEffect } from 'react';
import { Home, MessageSquare, Calendar, FileText, Settings } from 'lucide-react';
import Navbar from './Navbar';
import './ResponsiveLayout.css';
import profile from './assets/profile.jpg';

function ResponsiveLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const content = document.querySelector('.content-wrapper');
      
      if (width >= 992 && width <= 1600) {
        content.style.transform = 'scale(0.9)';
      } else if (width >= 700 && width <= 767) {
        content.style.transform = 'scale(0.8)';
      } else if (width >= 600 && width < 700) {
        content.style.transform = 'scale(0.75)';
      } else if (width <= 600) {
        content.style.transform = 'scale(0.5)';
      } else {
        content.style.transform = 'scale(1)';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content Area */}
      <div className="content-wrapper flex flex-1 pt-16">
        {/* Left Menu */}
        <aside className={`sidebar ${isMenuOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <nav className="px-4 py-4">
            <div className="space-y-1">
              {[
                { icon: Home, text: 'Dashboard' },
                { icon: Calendar, text: 'Calendar' },
                { icon: MessageSquare, text: 'Messages' },
                { icon: FileText, text: 'Documents' },
                { icon: Settings, text: 'Settings' },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 group"
                >
                  <item.icon className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-500" />
                  <span className="font-medium group-hover:text-blue-500">{item.text}</span>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`main-content ${isMenuOpen ? 'content-shifted' : ''}`}>
          {/* Stats Cards */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { title: 'Total Users', value: '2,543', change: '+12.5%' },
                { title: 'Revenue', value: '$45,234', change: '+8.3%' },
                { title: 'Active Projects', value: '12', change: '+2.4%' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <div className="mt-2 flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                <div className="mt-6 flow-root">
                  <ul className="-my-5 divide-y divide-gray-200">
                    {[
                      { user: 'Harshad Karale', action: 'completed task', time: '2 hours ago' },
                      { user: 'Jane Smith', action: 'uploaded document', time: '4 hours ago' },
                      { user: 'Mike Johnson', action: 'commented on post', time: '6 hours ago' },
                    ].map((activity, index) => (
                      <li key={index} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={profile}
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {activity.user}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {activity.action}
                            </p>
                          </div>
                          <div className="flex-shrink-0 text-sm text-gray-500">
                            {activity.time}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="hidden xl:block w-80 border-l border-gray-200 bg-white p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <div className="mt-4 space-y-4">
                {[
                  { title: 'New message', desc: 'You have a new message from Sarah' },
                  { title: 'Meeting reminder', desc: 'Team meeting in 30 minutes' },
                  { title: 'Task update', desc: 'Project deadline updated' },
                ].map((notification, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-2 w-2 mt-2 rounded-full bg-blue-500"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { icon: MessageSquare, text: 'New Message' },
                  { icon: Calendar, text: 'Schedule' },
                  { icon: FileText, text: 'Documents' },
                  { icon: Settings, text: 'Settings' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    <action.icon className="h-6 w-6 text-gray-600" />
                    <span className="mt-2 text-sm font-medium text-gray-700">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-80">
</div>


      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 Dashboard. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ResponsiveLayout;