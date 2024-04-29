import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Employee } from './employee';

interface EmployeesState {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  addManyEmployees: (employees: Employee[]) => void;
  resetEmployees: () => void;
}

export const useEmployeesStore = create<EmployeesState>()(
  persist(
    (set) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({ employees: [...state.employees, employee] })),
      addManyEmployees: (employees) =>
        set((state) => ({ employees: [...state.employees, ...employees] })),
      resetEmployees: () => set({ employees: [] }),
    }),
    { name: 'employees' }
  )
);
