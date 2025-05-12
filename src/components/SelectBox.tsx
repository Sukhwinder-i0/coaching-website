import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

interface SelectBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ value, onChange }) => {
  return (
    <div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full text-slate-300">
          <SelectValue placeholder="User Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="faculty">Faculty</SelectItem>
          <SelectItem value="student">Student</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;
