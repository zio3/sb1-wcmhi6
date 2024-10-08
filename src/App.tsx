import React from 'react'
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">社員情報一覧</h1>
      <EmployeeList />
    </div>
  )
}

export default App