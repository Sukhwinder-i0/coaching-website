import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React from 'react'

const SelectBox = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full text-slate-300">
          <SelectValue placeholder="user type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="faculty">Faculty</SelectItem>
          <SelectItem value="student">Student</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectBox