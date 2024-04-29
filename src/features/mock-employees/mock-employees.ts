import { faker } from '@faker-js/faker/locale/en_US';
import { Employee } from '~/features/create-employee/employee';
import { format } from 'date-fns';
import {
  DEPARTMENTS,
  STATES_NAMES,
} from '~/features/create-employee/constants';

export function createRandomEmployee(): Employee {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: format(faker.date.birthdate(), 'yyyy-MM-dd'),
    startDate: format(faker.date.past(), 'yyyy-MM-dd'),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.helpers.arrayElement(STATES_NAMES),
    zipCode: faker.location.zipCode(),
    department: faker.helpers.arrayElement(DEPARTMENTS),
  };
}

export function createRandomEmployees(count = 20) {
  return Array.from({ length: count }, createRandomEmployee);
}
