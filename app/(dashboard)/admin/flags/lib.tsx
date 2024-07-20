import _ from "lodash";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const COLORS = [
  "#b33dc6",
  "#27aeef",
  "#87bc45",
  "#bdcf32",
  "#ede15b",
  "#edbf33",
  "#ef9b20",
  "#f46a9b",
  "#ea5545",
];

export const Loading = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell>
          <Skeleton className="h-8 w-[60%]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-8 w-[40%]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-8 w-[20%]" />
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {_.range(10).map((row) => (
        <TableRow key={row}>
          {_.range(3).map((key) => (
            <TableCell key={key}>
              <Skeleton
                className="h-8"
                style={{ width: `${50 + _.random(0, 30)}%` }}
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
