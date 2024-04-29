import { columns } from './columns';
import { DataTable } from './data-table';
import { Link } from 'react-router-dom';
import { useEmployeesStore } from '~/features/create-employee/store';

export function loader() {
  return null;
}

export default function EmployeeList() {
  const employees = useEmployeesStore((state) => state.employees);

  return (
    <section className="flex flex-col content-center items-center gap-8 py-5">
      <h1 className="text-3xl font-bold">Current Employees</h1>
      <DataTable columns={columns} data={employees} />
      <Link to="/" className="underline">
        Home
      </Link>
    </section>
  );
}
