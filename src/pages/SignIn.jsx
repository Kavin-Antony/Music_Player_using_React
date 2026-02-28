import React from 'react';
import { LogIn } from 'lucide-react';

const SignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] p-10">
            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl p-10 max-w-md w-full border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center text-center">
                <LogIn size={48} className="text-purple-600 dark:text-purple-400 mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Sign in to sync your playlists across all your devices.</p>

                <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Email Address" className="w-full p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white outline-none focus:border-purple-500" />
                    <input type="password" placeholder="Password" className="w-full p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white outline-none focus:border-purple-500" />
                    <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold p-3 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">Sign In</button>
                </form>
                <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Don't have an account? <span className="text-purple-600 dark:text-purple-400 cursor-pointer font-medium hover:underline">Sign up</span></p>
            </div>
        </div>
    );
};

export default SignIn;
