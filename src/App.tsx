import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Shield, Bot, Code, Cog,Headphones, HeadphonesIcon, Star, Quote, Menu, X, Clock, Target, Rocket, Search, Settings, RotateCcw, MessageSquare } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group">
              <Bot className="h-8 w-8 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-900">AIReadySaaS</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group">
                Use Cases
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg transition-all duration-200">
                Book Free Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4">
              <a href="#how-it-works" className="block text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#use-cases" className="block text-gray-600 hover:text-blue-600 transition-colors">Use Cases</a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Your SaaS Product Into an
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block animate-gradient">
                  AI-Usable Experience
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                We help SaaS companies expose their product's functionality to ChatGPT, Claude, and AI agents—so your users can interact with your app through natural language.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                👉 Book Free Audit Call
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300">
                📩 Request Sample Integration Demo
                <span className="inline-block ml-2 transform group-hover:scale-110 transition-transform duration-200">🔗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🧩 The Problem
              </h2>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                Your users are already talking to AI.<br />
                <span className="text-red-600">But your product can't talk back.</span>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As ChatGPT, Claude, and AI copilots become part of daily workflows, users expect to do real things—create tasks, run reports, fetch insights—just by asking.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>If your product isn't usable through AI, you're not part of the new interface layer.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ✅ What We Do
            </h2>
            <p className="text-2xl font-semibold text-gray-900 mb-8">
              We make your SaaS product AI-usable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: MessageSquare, 
                title: 'ChatGPT Integration', 
                desc: 'Your key workflows are usable through ChatGPT',
                color: 'green'
              },
              { 
                icon: Code, 
                title: 'API Mapping', 
                desc: 'Your API is mapped to LLM function calls',
                color: 'blue'
              },
              { 
                icon: Bot, 
                title: 'Agent Compatibility', 
                desc: 'Your app becomes usable inside Claude, GPT agents, and LangChain flows',
                color: 'purple'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`bg-${item.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⚙️ How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: 1, 
                icon: Search,
                title: 'Audit (Free)', 
                desc: 'We assess your product\'s APIs and workflows for LLM readiness', 
                color: 'blue'
              },
              { 
                step: 2, 
                icon: Code,
                title: 'Translate', 
                desc: 'We generate OpenAPI specs + function schemas for AI agents', 
                color: 'green'
              },
              { 
                step: 3, 
                icon: Settings,
                title: 'Integrate', 
                desc: 'We wire up your app to ChatGPT, Claude, or open-source agents', 
                color: 'purple'
              },
              { 
                step: 4, 
                icon: Headphones,
                title: 'Support', 
                desc: 'We monitor and adapt integrations as platforms evolve', 
                color: 'green'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`bg-${item.color}-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg relative`}>
                  <item.icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-2 -right-2 bg-white text-gray-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💡 Use Cases We've Enabled
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trello (Live)',
                query: '"Create a new task in the marketing board due Friday."',
                result: 'Users now manage cards using natural language.',
                status: 'live',
                color: 'green'
              },
              {
                title: 'Stripe (Mock)',
                query: '"What\'s our total revenue from last week?"',
                result: 'Fetching key financial metrics without logging in.',
                status: 'mock',
                color: 'blue'
              },
              {
                title: 'Notion (Mock)',
                query: '"Summarize all notes tagged \'sales\' this month."',
                result: 'Instant content extraction using conversational queries.',
                status: 'mock',
                color: 'purple'
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    ✅ {useCase.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    useCase.status === 'live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {useCase.status}
                  </span>
                </div>
                
                <div className={`bg-${useCase.color}-50 p-4 rounded-lg mb-4 border-l-4 border-${useCase.color}-400`}>
                  <p className="text-gray-700 italic font-medium">
                    {useCase.query}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {useCase.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💼 Pricing
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Audit */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-slide-in-left flex flex-col">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                🔍 AI Readiness Audit
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-4 group-hover:scale-105 transition-transform duration-200">
                Free
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                A full feasibility report on how your product can work with LLMs.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mt-auto">
                Get Free Audit
              </button>
            </div>

            {/* Implementation */}
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up flex flex-col" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-200">
                ⚙️ Implementation
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-4 group-hover:scale-105 transition-transform duration-200">
                $2,500
                <span className="text-sm text-gray-600 font-normal"> (one-time)</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                We integrate your top workflows with ChatGPT or Claude in 2–3 weeks.
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mt-auto">
                Start Integration
              </button>
            </div>

            {/* Retainer */}
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-slide-in-right flex flex-col">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeadphonesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                🔁 Retainer
              </h3>
              <div className="text-3xl font-bold text-purple-600 mb-4 group-hover:scale-105 transition-transform duration-200">
                $500
                <span className="text-sm text-gray-600 font-normal">/month</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Covers prompt tuning, compatibility updates, and new agent support for initial usage tier.
              </p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mt-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🛠️ Built by Engineers. Tuned for Real Usage.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a lean technical team focused on making AI-powered interactions real—fast. 
              No fluff, no long timelines, just working LLM integrations your users will actually use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Code, title: 'Deep Technical Expertise', desc: 'Years of experience with OpenAPI, LLM function calling, and agent frameworks' },
              { icon: Zap, title: 'Fast Implementation', desc: 'Most integrations completed in 2-3 weeks with minimal disruption to your product' },
              { icon: Target, title: 'Real Usage Focus', desc: 'We optimize for actual user adoption, not just technical compatibility' }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🚀 Let Your Product Talk Back
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Start with a free audit to see exactly how your SaaS can become AI-usable. 
              No commitment, just clear next steps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              👉 Book Free Audit Call
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg">
              📩 Request Sample Integration Demo
              <span className="inline-block ml-2 transform group-hover:scale-110 transition-transform duration-200">🔗</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4 group">
                <Bot className="h-8 w-8 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl font-bold">AIReadySaaS</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making SaaS products AI-accessible through expert integration services. 
                Built by engineers, tuned for real usage.
              </p>
            </div>
            
            {[
              { title: 'Services', links: ['Free AI Audit', 'Implementation', 'Retainer Support'] },
              { title: 'Resources', links: ['Use Cases', 'Integration Guide', 'Technical Docs'] },
              { title: 'Contact', links: ['hello@aireadysaas.com', 'Book Free Audit', 'Request Demo'] }
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <p>&copy; 2024 AIReadySaaS. All rights reserved. | Built by Engineers. Tuned for Real Usage.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;