import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function DynamicClass({ isActive }) {
  const className = isActive ? "active" : "inactive";
  return <div className={className}>Dynamic Class Example</div>;
}

export default DynamicClass