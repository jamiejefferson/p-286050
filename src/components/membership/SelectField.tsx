
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  label: string;
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder = "Please select",
}) => {
  const getOptions = (label: string) => {
    switch (label.toLowerCase()) {
      case "adult":
        return [
          { value: "1", label: "1 Adult" },
          { value: "2", label: "2 Adults" },
          { value: "3", label: "3 Adults" },
          { value: "4", label: "4 Adults" },
        ];
      case "youth":
        return [
          { value: "1", label: "1 Youth (12-17)" },
          { value: "2", label: "2 Youths" },
          { value: "3", label: "3 Youths" },
        ];
      case "child":
        return [
          { value: "1", label: "1 Child (3-11)" },
          { value: "2", label: "2 Children" },
          { value: "3", label: "3 Children" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
      <div className="text-[#1E1E1E] font-medium leading-[0.8] uppercase">
        {label}
      </div>
      <Select>
        <SelectTrigger className="w-full mt-4 bg-white border-[rgba(222,221,220,1)] text-[rgba(50,50,50,1)]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {getOptions(label).map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
