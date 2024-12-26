import React from 'react';
import { ImageEnhancer } from './components/ImageEnhancer';
import { Copyright } from './components/Copyright';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <ImageEnhancer />
        <Copyright />
      </main>
    </div>
  );
}