import React from 'react';

export function Copyright() {
  return (
    <div className="text-center text-sm text-gray-500 mt-8">
      © {new Date().getFullYear()} Aryan Acharya. All rights reserved.
    </div>
  );
}