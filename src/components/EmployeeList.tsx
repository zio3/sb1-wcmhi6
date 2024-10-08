import React, { useState, useEffect } from 'react'
import { Pencil, Save, X } from 'lucide-react'

interface Employee {
  id: number
  name: string
  position: string
  department: string
}

const initialEmployees: Employee[] = [
  { id: 1, name: '山田 太郎', position: '部長', department: '営業部' },
  { id: 2, name: '佐藤 花子', position: '課長', department: '人事部' },
  { id: 3, name: '鈴木 一郎', position: '主任', department: '開発部' },
]

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Employee | null>(null)

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees))
    } else {
      setEmployees(initialEmployees)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  const handleEdit = (employee: Employee) => {
    setEditingId(employee.id)
    setEditForm({ ...employee })
  }

  const handleSave = () => {
    if (editForm) {
      setEmployees(employees.map(emp => emp.id === editForm.id ? editForm : emp))
      setEditingId(null)
      setEditForm(null)
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditForm(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editForm) {
      setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }
  }

  return (
    // ... (既存のJSX部分は変更なし)
  )
}

export default EmployeeList