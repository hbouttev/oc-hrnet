import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table';

export type Employee = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'firstName',
    // header: 'First Name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
  },
  {
    accessorKey: 'lastName',
    // header: 'Last Name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
  },
  {
    accessorKey: 'startDate',
    // header: 'Start Date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: (cell) =>
      new Date(cell.getValue() as string).toLocaleDateString('en-US'),
  },
  {
    accessorKey: 'department',
    // header: 'Department',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
  },
  {
    accessorKey: 'dateOfBirth',
    // header: 'Date of Birth',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Birth" />
    ),
    cell: (cell) =>
      new Date(cell.getValue() as string).toLocaleDateString('en-US'),
  },
  {
    accessorKey: 'street',
    // header: 'Street',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Street" />
    ),
  },
  {
    accessorKey: 'city',
    // header: 'City',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
  },
  {
    accessorKey: 'state',
    // header: 'State',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="State" />
    ),
  },
  {
    accessorKey: 'zipCode',
    // header: 'Zip Code',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Zip Code" />
    ),
  },
];
