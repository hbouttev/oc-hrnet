import { ActionFunctionArgs, Link, useFetcher } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DEPARTMENTS,
  STATES_NAMES,
} from '~/features/create-employee/constants';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from 'hb-oc-hrnet-modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '~/components/ui/calendar';
import { cn } from '~/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { useForm } from 'react-hook-form';
import { Employee, employeeSchema } from '~/features/create-employee/employee';
import { useEmployeesStore } from '~/features/create-employee/store';
import { useState } from 'react';
import { createRandomEmployees } from '~/features/mock-employees/mock-employees.ts';

// import { DevTool } from '@hookform/devtools';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const createEmployeeData = Object.fromEntries(formData.entries()) as Employee;
  const addEmployee = useEmployeesStore.getState().addEmployee;
  addEmployee(createEmployeeData);
  return null;
}

export default function RootIndex() {
  const [openDialog, setOpenDialog] = useState(false);
  const createEmployeeFetcher = useFetcher();
  const addManyEmployees = useEmployeesStore((state) => state.addManyEmployees);
  const resetEmployees = useEmployeesStore((state) => state.resetEmployees);

  const form = useForm<Employee>({
    resolver: zodResolver(employeeSchema),
    mode: 'onBlur',
  });

  function onSubmit(values: Employee) {
    createEmployeeFetcher.submit(values, {
      method: 'post',
    });
    setOpenDialog(true);
    form.reset();
  }

  return (
    <section className="flex flex-col content-center items-center gap-8 py-5">
      <h1 className="text-3xl font-bold">HRnet</h1>
      <Link to="/employee-list" className="underline">
        Vew Current Employees
      </Link>
      <p className="text-xl font-bold">Create Employee</p>
      <Form {...form}>
        <createEmployeeFetcher.Form
          className="flex w-96 flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="firstName"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col pt-1">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col pt-1">
                <FormLabel>Start date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {STATES_NAMES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {DEPARTMENTS.map((department) => (
                      <SelectItem key={department} value={department}>
                        {department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center pt-4">
            <Button type="submit">Save</Button>
          </div>
          {/*<DevTool control={form.control} />*/}
        </createEmployeeFetcher.Form>
      </Form>
      <div className="flex flex-col items-center justify-center gap-3 pt-4">
        <Button
          variant="secondary"
          onClick={() => addManyEmployees(createRandomEmployees())}
        >
          Test: add 20 employees
        </Button>
        <Button variant="secondary" onClick={() => resetEmployees()}>
          Test: reset employees
        </Button>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          classNames={{
            overlay:
              'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            content:
              'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
            close:
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
          }}
        >
          <DialogHeader className="flex flex-col space-y-1.5 text-center sm:text-left">
            <DialogDescription className="text-sm text-muted-foreground">
              Employee Created!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
