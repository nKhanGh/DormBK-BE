
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AddressScalarFieldEnum = {
  ssn: 'ssn',
  commune: 'commune',
  district: 'district',
  province: 'province'
};

exports.Prisma.Dormitory_CardScalarFieldEnum = {
  Number: 'Number',
  Start_Date: 'Start_Date',
  End_Date: 'End_Date',
  ID_Card: 'ID_Card',
  Validity: 'Validity'
};

exports.Prisma.EmailScalarFieldEnum = {
  ssn: 'ssn',
  email: 'email'
};

exports.Prisma.Employee_CardScalarFieldEnum = {
  Number: 'Number',
  Start_Date: 'Start_Date',
  End_Date: 'End_Date',
  ID_Card: 'ID_Card',
  Employee_Type: 'Employee_Type'
};

exports.Prisma.Identity_CardScalarFieldEnum = {
  ID: 'ID',
  Issued_Date: 'Issued_Date'
};

exports.Prisma.PeopleScalarFieldEnum = {
  SSN: 'SSN',
  Full_Name: 'Full_Name',
  Last_Name: 'Last_Name',
  Birthday: 'Birthday',
  Sex: 'Sex',
  Health_State: 'Health_State',
  Ethnic_Group: 'Ethnic_Group'
};

exports.Prisma.PhoneNumberScalarFieldEnum = {
  ssn: 'ssn',
  phoneNumber: 'phoneNumber'
};

exports.Prisma.BuildingScalarFieldEnum = {
  building_id: 'building_id',
  building_name: 'building_name',
  floors: 'floors',
  rooms: 'rooms',
  has_air_conditioner: 'has_air_conditioner',
  sponsor: 'sponsor',
  construction_date: 'construction_date',
  last_renovation: 'last_renovation'
};

exports.Prisma.Building_equipmentScalarFieldEnum = {
  building_id: 'building_id',
  equipment_id: 'equipment_id',
  quantity: 'quantity'
};

exports.Prisma.DisciplinaryActionScalarFieldEnum = {
  actionId: 'actionId',
  actionType: 'actionType',
  reason: 'reason',
  decisionDate: 'decisionDate',
  effectiveFrom: 'effectiveFrom',
  effectiveTo: 'effectiveTo',
  severityLevel: 'severityLevel',
  status: 'status'
};

exports.Prisma.DisciplineStaffScalarFieldEnum = {
  actionId: 'actionId',
  essn: 'essn'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  essn: 'essn',
  salary: 'salary',
  empId: 'empId'
};

exports.Prisma.Health_roomScalarFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id',
  num_of_staff: 'num_of_staff',
  start_time: 'start_time',
  end_time: 'end_time',
  equipment_status: 'equipment_status'
};

exports.Prisma.Large_equipmentScalarFieldEnum = {
  equipment_id: 'equipment_id',
  equipment_name: 'equipment_name',
  equipment_type: 'equipment_type',
  equipment_status: 'equipment_status',
  purchase_date: 'purchase_date',
  purchase_location: 'purchase_location'
};

exports.Prisma.Living_roomScalarFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id',
  max_num_of_students: 'max_num_of_students',
  current_num_of_students: 'current_num_of_students',
  rental_price: 'rental_price',
  occupancy_rate: 'occupancy_rate'
};

exports.Prisma.Management_roomScalarFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id',
  num_of_staff: 'num_of_staff',
  start_time: 'start_time',
  end_time: 'end_time'
};

exports.Prisma.ManagerDormScalarFieldEnum = {
  user_name: 'user_name',
  password: 'password'
};

exports.Prisma.Manager_degreeScalarFieldEnum = {
  essn: 'essn',
  degree: 'degree'
};

exports.Prisma.Manager_employeeScalarFieldEnum = {
  essn: 'essn',
  room_id: 'room_id',
  building_id: 'building_id',
  experience: 'experience'
};

exports.Prisma.Medical_degreeScalarFieldEnum = {
  essn: 'essn',
  degree: 'degree'
};

exports.Prisma.Medical_employeeScalarFieldEnum = {
  essn: 'essn',
  room_id: 'room_id',
  building_id: 'building_id',
  experience: 'experience'
};

exports.Prisma.Other_employeeScalarFieldEnum = {
  essn: 'essn',
  room_id: 'room_id',
  building_id: 'building_id',
  typeWork: 'typeWork'
};

exports.Prisma.Other_employee_time_workScalarFieldEnum = {
  essn: 'essn',
  date_work: 'date_work',
  time_start: 'time_start',
  time_end: 'time_end'
};

exports.Prisma.Other_roomScalarFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id',
  room_type: 'room_type',
  num_of_staff: 'num_of_staff',
  start_time: 'start_time',
  end_time: 'end_time'
};

exports.Prisma.RelativeScalarFieldEnum = {
  Sssn: 'Sssn',
  fname: 'fname',
  lname: 'lname',
  birthday: 'birthday',
  relationship: 'relationship',
  address: 'address',
  phoneNumber: 'phoneNumber',
  job: 'job'
};

exports.Prisma.RoomScalarFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id',
  room_status: 'room_status',
  room_area: 'room_area'
};

exports.Prisma.StudentScalarFieldEnum = {
  Sssn: 'Sssn',
  studentId: 'studentId',
  hasHealthInsurance: 'hasHealthInsurance',
  studyStatus: 'studyStatus',
  className: 'className',
  faculty: 'faculty',
  building_id: 'building_id',
  room_id: 'room_id'
};

exports.Prisma.StudentDisciplineScalarFieldEnum = {
  actionId: 'actionId',
  Sssn: 'Sssn'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.AddressOrderByRelevanceFieldEnum = {
  ssn: 'ssn',
  commune: 'commune',
  district: 'district',
  province: 'province'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.Dormitory_CardOrderByRelevanceFieldEnum = {
  Number: 'Number',
  ID_Card: 'ID_Card'
};

exports.Prisma.EmailOrderByRelevanceFieldEnum = {
  ssn: 'ssn',
  email: 'email'
};

exports.Prisma.Employee_CardOrderByRelevanceFieldEnum = {
  Number: 'Number',
  ID_Card: 'ID_Card',
  Employee_Type: 'Employee_Type'
};

exports.Prisma.Identity_CardOrderByRelevanceFieldEnum = {
  ID: 'ID'
};

exports.Prisma.PeopleOrderByRelevanceFieldEnum = {
  SSN: 'SSN',
  Full_Name: 'Full_Name',
  Last_Name: 'Last_Name',
  Sex: 'Sex',
  Health_State: 'Health_State',
  Ethnic_Group: 'Ethnic_Group'
};

exports.Prisma.PhoneNumberOrderByRelevanceFieldEnum = {
  ssn: 'ssn',
  phoneNumber: 'phoneNumber'
};

exports.Prisma.buildingOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  building_name: 'building_name',
  sponsor: 'sponsor'
};

exports.Prisma.building_equipmentOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  equipment_id: 'equipment_id'
};

exports.Prisma.disciplinaryActionOrderByRelevanceFieldEnum = {
  actionId: 'actionId',
  actionType: 'actionType',
  reason: 'reason',
  severityLevel: 'severityLevel',
  status: 'status'
};

exports.Prisma.disciplineStaffOrderByRelevanceFieldEnum = {
  actionId: 'actionId',
  essn: 'essn'
};

exports.Prisma.employeeOrderByRelevanceFieldEnum = {
  essn: 'essn',
  empId: 'empId'
};

exports.Prisma.health_roomOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id'
};

exports.Prisma.large_equipmentOrderByRelevanceFieldEnum = {
  equipment_id: 'equipment_id',
  equipment_name: 'equipment_name',
  equipment_type: 'equipment_type',
  purchase_location: 'purchase_location'
};

exports.Prisma.living_roomOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id'
};

exports.Prisma.management_roomOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id'
};

exports.Prisma.managerDormOrderByRelevanceFieldEnum = {
  user_name: 'user_name',
  password: 'password'
};

exports.Prisma.manager_degreeOrderByRelevanceFieldEnum = {
  essn: 'essn',
  degree: 'degree'
};

exports.Prisma.manager_employeeOrderByRelevanceFieldEnum = {
  essn: 'essn',
  room_id: 'room_id',
  building_id: 'building_id'
};

exports.Prisma.medical_degreeOrderByRelevanceFieldEnum = {
  essn: 'essn',
  degree: 'degree'
};

exports.Prisma.medical_employeeOrderByRelevanceFieldEnum = {
  essn: 'essn',
  room_id: 'room_id',
  building_id: 'building_id'
};

exports.Prisma.other_employeeOrderByRelevanceFieldEnum = {
  essn: 'essn',
  room_id: 'room_id',
  building_id: 'building_id',
  typeWork: 'typeWork'
};

exports.Prisma.other_employee_time_workOrderByRelevanceFieldEnum = {
  essn: 'essn'
};

exports.Prisma.other_roomOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id',
  room_type: 'room_type'
};

exports.Prisma.relativeOrderByRelevanceFieldEnum = {
  Sssn: 'Sssn',
  fname: 'fname',
  lname: 'lname',
  relationship: 'relationship',
  address: 'address',
  phoneNumber: 'phoneNumber',
  job: 'job'
};

exports.Prisma.roomOrderByRelevanceFieldEnum = {
  building_id: 'building_id',
  room_id: 'room_id'
};

exports.Prisma.studentOrderByRelevanceFieldEnum = {
  Sssn: 'Sssn',
  studentId: 'studentId',
  studyStatus: 'studyStatus',
  className: 'className',
  faculty: 'faculty',
  building_id: 'building_id',
  room_id: 'room_id'
};

exports.Prisma.studentDisciplineOrderByRelevanceFieldEnum = {
  actionId: 'actionId',
  Sssn: 'Sssn'
};
exports.health_room_equipment_status = exports.$Enums.health_room_equipment_status = {
  Good: 'Good',
  Under_Repair: 'Under_Repair',
  Not_Available: 'Not_Available'
};

exports.large_equipment_equipment_status = exports.$Enums.large_equipment_equipment_status = {
  Working: 'Working',
  Damaged: 'Damaged',
  Under_Repair: 'Under_Repair'
};

exports.other_employee_time_work_date_work = exports.$Enums.other_employee_time_work_date_work = {
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday',
  other: 'other'
};

exports.room_room_status = exports.$Enums.room_room_status = {
  Available: 'Available',
  Occupied: 'Occupied',
  Under_Maintenance: 'Under_Maintenance'
};

exports.Prisma.ModelName = {
  Address: 'Address',
  Dormitory_Card: 'Dormitory_Card',
  Email: 'Email',
  Employee_Card: 'Employee_Card',
  Identity_Card: 'Identity_Card',
  People: 'People',
  PhoneNumber: 'PhoneNumber',
  building: 'building',
  building_equipment: 'building_equipment',
  disciplinaryAction: 'disciplinaryAction',
  disciplineStaff: 'disciplineStaff',
  employee: 'employee',
  health_room: 'health_room',
  large_equipment: 'large_equipment',
  living_room: 'living_room',
  management_room: 'management_room',
  managerDorm: 'managerDorm',
  manager_degree: 'manager_degree',
  manager_employee: 'manager_employee',
  medical_degree: 'medical_degree',
  medical_employee: 'medical_employee',
  other_employee: 'other_employee',
  other_employee_time_work: 'other_employee_time_work',
  other_room: 'other_room',
  relative: 'relative',
  room: 'room',
  student: 'student',
  studentDiscipline: 'studentDiscipline'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
