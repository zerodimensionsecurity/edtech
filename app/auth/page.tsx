"use client";
import { useState } from 'react';
import { Shield, Lock } from 'lucide-react';
import LoginForm  from '../../components/LoginForm';
import SignupForm  from '../../components/SignUpForm';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fadeIn">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="relative">
              <Shield className="h-16 w-16 text-cyan-400 animate-float" />
              <Lock className="h-8 w-8 text-blue-400 absolute -bottom-1 -right-1 animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Cyber<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Security</span>
            <br />
            Academy
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Master blockchain technology and cybersecurity through hands-on courses designed by industry experts.
          </p>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Expert-led courses</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
              <span>Hands-on labs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-600"></div>
              <span>Industry certificates</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
            <div key={isLogin ? 'login' : 'signup'}>
              {isLogin ? (
                <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
              ) : (
                <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
