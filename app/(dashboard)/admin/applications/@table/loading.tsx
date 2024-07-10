import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const getRandomWidth = () => `${Math.floor(Math.random() * 50) + 50}%`;

const ApplicantsSkeleton = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <Skeleton className="h-10 w-1/4 mr-4" />
        <Skeleton className="h-10 w-1/4" />
        <Skeleton className="ml-auto h-10 w-[80px]" />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Skeleton className="h-6 w-20" />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Skeleton className="h-6 w-20" />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Skeleton className="h-6 w-20" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Skeleton className="h-6" style={{ width: getRandomWidth() }} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Skeleton className="h-6" style={{ width: getRandomWidth() }} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Skeleton className="h-6" style={{ width: getRandomWidth() }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <Skeleton className="h-10 w-[80px] mr-2" />
        <Skeleton className="h-10 w-[80px]" />
      </div>
    </div>
  );
};

export default ApplicantsSkeleton;
