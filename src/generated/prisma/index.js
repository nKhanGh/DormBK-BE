
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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

exports.large_equipment_equipment_status = exports.$Enums.large_equipment_equipment_status = {
  Working: 'Working',
  Damaged: 'Damaged',
  Under_Repair: 'Under_Repair'
};

exports.health_room_equipment_status = exports.$Enums.health_room_equipment_status = {
  Good: 'Good',
  Under_Repair: 'Under_Repair',
  Not_Available: 'Not_Available'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "A:\\workspace\\DormBK\\DormBK-BE\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "A:\\workspace\\DormBK\\DormBK-BE\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Address {\n  ssn      String @db.Char(8)\n  commune  String @db.VarChar(30)\n  district String @db.VarChar(30)\n  province String @db.VarChar(30)\n  People   People @relation(fields: [ssn], references: [SSN], onDelete: Cascade, map: \"fk_address\")\n\n  @@id([ssn, commune, district, province])\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel Dormitory_Card {\n  Number        String        @id @db.Char(7)\n  Start_Date    DateTime?     @db.Date\n  End_Date      DateTime?     @db.Date\n  ID_Card       String        @db.Char(8)\n  Validity      Boolean?      @default(true)\n  Identity_Card Identity_Card @relation(fields: [Number], references: [ID], onDelete: Cascade, map: \"Dormitory_Card_ibfk_1\")\n  student       student       @relation(fields: [ID_Card], references: [Sssn], onDelete: Cascade, map: \"Dormitory_Card_ibfk_2\")\n\n  @@index([ID_Card], map: \"ID_Card\")\n}\n\nmodel Email {\n  ssn    String @db.Char(8)\n  email  String @db.VarChar(50)\n  People People @relation(fields: [ssn], references: [SSN], onDelete: Cascade, map: \"fk_email\")\n\n  @@id([ssn, email])\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel Employee_Card {\n  Number        String        @id @db.Char(7)\n  Start_Date    DateTime?     @db.Date\n  End_Date      DateTime?     @db.Date\n  ID_Card       String        @db.Char(8)\n  Employee_Type String?       @db.Char(10)\n  Identity_Card Identity_Card @relation(fields: [Number], references: [ID], onDelete: Cascade, map: \"Employee_Card_ibfk_1\")\n  employee      employee      @relation(fields: [ID_Card], references: [essn], onDelete: Cascade, map: \"Employee_Card_ibfk_2\")\n\n  @@index([ID_Card], map: \"ID_Card\")\n}\n\nmodel Identity_Card {\n  ID             String          @id @db.Char(7)\n  Issued_Date    DateTime        @db.Date\n  Dormitory_Card Dormitory_Card?\n  Employee_Card  Employee_Card?\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel People {\n  SSN          String        @id @db.Char(8)\n  Full_Name    String        @db.VarChar(20)\n  Last_Name    String        @db.VarChar(20)\n  Birthday     DateTime      @db.Date\n  Sex          String?       @db.Char(1)\n  Health_State String?       @db.VarChar(100)\n  Ethnic_Group String?       @db.VarChar(30)\n  Address      Address[]\n  Email        Email[]\n  PhoneNumber  PhoneNumber[]\n  employee     employee?\n  student      student?\n}\n\nmodel PhoneNumber {\n  ssn         String @db.Char(8)\n  phoneNumber String @db.Char(10)\n  People      People @relation(fields: [ssn], references: [SSN], onDelete: Cascade, map: \"fk_phoneNumber\")\n\n  @@id([ssn, phoneNumber])\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel building {\n  building_id         String               @id @db.Char(5)\n  building_name       String               @db.Char(5)\n  floors              Int\n  rooms               Int\n  has_air_conditioner Boolean\n  sponsor             String?              @db.VarChar(100)\n  construction_date   DateTime             @db.Date\n  last_renovation     DateTime?            @db.Date\n  building_equipment  building_equipment[]\n  room                room[]\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel building_equipment {\n  building_id     String          @db.Char(5)\n  equipment_id    String          @db.Char(10)\n  quantity        Int\n  building        building        @relation(fields: [building_id], references: [building_id], onDelete: Cascade, map: \"fk_building_equipment_building\")\n  large_equipment large_equipment @relation(fields: [equipment_id], references: [equipment_id], onDelete: Cascade, map: \"fk_building_equipment_equipment\")\n\n  @@id([building_id, equipment_id])\n  @@index([equipment_id], map: \"fk_building_equipment_equipment\")\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel disciplinaryAction {\n  actionId          String              @id @db.VarChar(20)\n  actionType        String              @db.VarChar(50)\n  reason            String              @db.Text\n  decisionDate      DateTime            @db.Date\n  effectiveFrom     DateTime            @db.Date\n  effectiveTo       DateTime?           @db.Date\n  severityLevel     String?             @db.VarChar(20)\n  status            String?             @db.VarChar(20)\n  disciplineStaff   disciplineStaff[]\n  studentDiscipline studentDiscipline[]\n}\n\nmodel disciplineStaff {\n  actionId           String             @db.VarChar(20)\n  essn               String             @db.Char(8)\n  disciplinaryAction disciplinaryAction @relation(fields: [actionId], references: [actionId], onDelete: Cascade, map: \"fk_disciplineStaff_d\")\n  manager_employee   manager_employee   @relation(fields: [essn], references: [essn], onDelete: Cascade, map: \"fk_disciplineStaff_m\")\n\n  @@id([actionId, essn])\n  @@index([essn], map: \"fk_disciplineStaff_m\")\n}\n\nmodel employee {\n  essn             String            @id @db.Char(8)\n  salary           Decimal?          @db.Decimal(10, 0)\n  empId            String?           @db.Char(7)\n  Employee_Card    Employee_Card[]\n  People           People            @relation(fields: [essn], references: [SSN], onDelete: Cascade, map: \"fk_essn\")\n  manager_employee manager_employee?\n  medical_employee medical_employee?\n  other_employee   other_employee?\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel health_room {\n  building_id      String                       @db.Char(5)\n  room_id          String                       @db.Char(5)\n  num_of_staff     Int                          @default(0)\n  start_time       DateTime                     @db.Time(0)\n  end_time         DateTime                     @db.Time(0)\n  equipment_status health_room_equipment_status\n  room             room                         @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: Cascade, map: \"fk_health_room\")\n  medical_employee medical_employee[]\n\n  @@id([building_id, room_id])\n}\n\nmodel large_equipment {\n  equipment_id       String                           @id @db.Char(10)\n  equipment_name     String                           @db.VarChar(100)\n  equipment_type     String                           @db.VarChar(50)\n  equipment_status   large_equipment_equipment_status\n  purchase_date      DateTime                         @db.Date\n  purchase_location  String?                          @db.VarChar(255)\n  building_equipment building_equipment[]\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel living_room {\n  building_id             String    @db.Char(5)\n  room_id                 String    @db.Char(5)\n  max_num_of_students     Int\n  current_num_of_students Int       @default(0)\n  rental_price            Decimal   @db.Decimal(10, 2)\n  occupancy_rate          Decimal   @default(0.00) @db.Decimal(5, 2)\n  student                 student[]\n\n  @@id([building_id, room_id])\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel management_room {\n  building_id      String             @db.Char(5)\n  room_id          String             @db.Char(5)\n  num_of_staff     Int                @default(0)\n  start_time       DateTime           @db.Time(0)\n  end_time         DateTime           @db.Time(0)\n  room             room               @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: Cascade, map: \"fk_mgmt_room\")\n  manager_employee manager_employee[]\n\n  @@id([building_id, room_id])\n}\n\nmodel managerDorm {\n  user_name String @db.VarChar(50)\n  password  String @db.VarChar(255)\n\n  @@id([user_name, password])\n}\n\nmodel manager_degree {\n  essn             String           @db.Char(8)\n  degree           String           @db.VarChar(50)\n  manager_employee manager_employee @relation(fields: [essn], references: [essn], onDelete: Cascade, map: \"fk_mgr_deg\")\n\n  @@id([essn, degree])\n}\n\nmodel manager_employee {\n  essn            String            @id @db.Char(8)\n  room_id         String?           @db.Char(5)\n  building_id     String?           @db.Char(5)\n  experience      Decimal?          @db.Decimal(2, 0)\n  disciplineStaff disciplineStaff[]\n  manager_degree  manager_degree[]\n  management_room management_room?  @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_manager_employee_room\")\n  employee        employee          @relation(fields: [essn], references: [essn], onDelete: Cascade, map: \"fk_mgr_essn\")\n\n  @@index([building_id, room_id], map: \"fk_manager_employee_room\")\n}\n\nmodel medical_degree {\n  essn             String           @db.Char(8)\n  degree           String           @db.VarChar(50)\n  medical_employee medical_employee @relation(fields: [essn], references: [essn], onDelete: Cascade, map: \"fk_med_deg\")\n\n  @@id([essn, degree])\n}\n\nmodel medical_employee {\n  essn           String           @id @db.Char(8)\n  room_id        String?          @db.Char(5)\n  building_id    String?          @db.Char(5)\n  experience     Decimal?         @db.Decimal(2, 0)\n  medical_degree medical_degree[]\n  employee       employee         @relation(fields: [essn], references: [essn], onDelete: Cascade, map: \"fk_med_essn\")\n  health_room    health_room?     @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_medical_employee_room\")\n\n  @@index([building_id, room_id], map: \"fk_medical_employee_room\")\n}\n\nmodel other_employee {\n  essn                     String                     @id @db.Char(8)\n  room_id                  String?                    @db.Char(5)\n  building_id              String?                    @db.Char(5)\n  typeWork                 String?                    @db.VarChar(20)\n  employee                 employee                   @relation(fields: [essn], references: [essn], onDelete: Cascade, map: \"fk_oth_essn\")\n  other_room               other_room?                @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_other_employee_room\")\n  other_employee_time_work other_employee_time_work[]\n\n  @@index([building_id, room_id], map: \"fk_other_employee_room\")\n}\n\nmodel other_employee_time_work {\n  essn           String                             @db.Char(8)\n  date_work      other_employee_time_work_date_work\n  time_start     DateTime                           @db.Time(0)\n  time_end       DateTime                           @db.Time(0)\n  other_employee other_employee                     @relation(fields: [essn], references: [essn], onDelete: NoAction, onUpdate: NoAction, map: \"fk_other_time\")\n\n  @@id([essn, date_work, time_start, time_end])\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel other_room {\n  building_id    String           @db.Char(5)\n  room_id        String           @db.Char(5)\n  room_type      String           @db.VarChar(100)\n  num_of_staff   Int              @default(0)\n  start_time     DateTime         @db.Time(0)\n  end_time       DateTime         @db.Time(0)\n  other_employee other_employee[]\n  room           room             @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: Cascade, map: \"fk_other_room\")\n\n  @@id([building_id, room_id])\n}\n\nmodel relative {\n  Sssn         String   @db.Char(8)\n  fname        String   @db.VarChar(20)\n  lname        String   @db.VarChar(20)\n  birthday     DateTime @db.Date\n  relationship String   @db.VarChar(50)\n  address      String   @db.VarChar(255)\n  phoneNumber  String?  @db.Char(10)\n  job          String?  @db.VarChar(50)\n  student      student  @relation(fields: [Sssn], references: [Sssn], onDelete: Cascade, map: \"fk_relative\")\n\n  @@id([Sssn, fname, lname])\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel room {\n  building_id     String           @db.Char(5)\n  room_id         String           @db.Char(5)\n  room_status     room_room_status\n  room_area       Decimal          @db.Decimal(10, 2)\n  health_room     health_room?\n  management_room management_room?\n  other_room      other_room?\n  building        building         @relation(fields: [building_id], references: [building_id], onDelete: Cascade, map: \"fk_room_building\")\n\n  @@id([building_id, room_id])\n}\n\nmodel student {\n  Sssn               String              @id @db.Char(8)\n  studentId          String              @db.Char(8)\n  hasHealthInsurance Boolean\n  studyStatus        String?             @db.VarChar(20)\n  className          String?             @db.VarChar(20)\n  faculty            String?             @db.VarChar(50)\n  building_id        String?             @db.Char(5)\n  room_id            String?             @db.Char(5)\n  Dormitory_Card     Dormitory_Card[]\n  relative           relative[]\n  People             People              @relation(fields: [Sssn], references: [SSN], onDelete: Cascade, map: \"fk_student_p\")\n  living_room        living_room?        @relation(fields: [building_id, room_id], references: [building_id, room_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_student_room\")\n  studentDiscipline  studentDiscipline[]\n\n  @@index([building_id, room_id], map: \"fk_student_room\")\n}\n\nmodel studentDiscipline {\n  actionId           String             @db.VarChar(20)\n  Sssn               String             @db.Char(8)\n  disciplinaryAction disciplinaryAction @relation(fields: [actionId], references: [actionId], onDelete: Cascade, map: \"fk_studentDiscipline_d\")\n  student            student            @relation(fields: [Sssn], references: [Sssn], onDelete: Cascade, map: \"fk_studentDiscipline_s\")\n\n  @@id([actionId, Sssn])\n  @@index([Sssn], map: \"fk_studentDiscipline_s\")\n}\n\nenum other_employee_time_work_date_work {\n  monday\n  tuesday\n  wednesday\n  thursday\n  friday\n  saturday\n  sunday\n  other\n}\n\nenum room_room_status {\n  Available\n  Occupied\n  Under_Maintenance @map(\"Under Maintenance\")\n}\n\nenum large_equipment_equipment_status {\n  Working\n  Damaged\n  Under_Repair @map(\"Under Repair\")\n}\n\nenum health_room_equipment_status {\n  Good\n  Under_Repair  @map(\"Under Repair\")\n  Not_Available @map(\"Not Available\")\n}\n",
  "inlineSchemaHash": "b4005bf3c8de15b5b268d91b05f17dadaa0ffecd7a373768c2826d610ed33319",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Address\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commune\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"district\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"People\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"People\",\"nativeType\":null,\"relationName\":\"AddressToPeople\",\"relationFromFields\":[\"ssn\"],\"relationToFields\":[\"SSN\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ssn\",\"commune\",\"district\",\"province\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Dormitory_Card\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"7\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Start_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"End_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Validity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Identity_Card\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Identity_Card\",\"nativeType\":null,\"relationName\":\"Dormitory_CardToIdentity_Card\",\"relationFromFields\":[\"Number\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"Dormitory_CardTostudent\",\"relationFromFields\":[\"ID_Card\"],\"relationToFields\":[\"Sssn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"Email\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"People\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"People\",\"nativeType\":null,\"relationName\":\"EmailToPeople\",\"relationFromFields\":[\"ssn\"],\"relationToFields\":[\"SSN\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ssn\",\"email\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Employee_Card\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"7\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Start_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"End_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Employee_Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Identity_Card\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Identity_Card\",\"nativeType\":null,\"relationName\":\"Employee_CardToIdentity_Card\",\"relationFromFields\":[\"Number\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employee\",\"nativeType\":null,\"relationName\":\"Employee_CardToemployee\",\"relationFromFields\":[\"ID_Card\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"Identity_Card\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"7\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Issued_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dormitory_Card\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dormitory_Card\",\"nativeType\":null,\"relationName\":\"Dormitory_CardToIdentity_Card\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Employee_Card\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Employee_Card\",\"nativeType\":null,\"relationName\":\"Employee_CardToIdentity_Card\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"People\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SSN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Full_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Last_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Health_State\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ethnic_Group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Address\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Address\",\"nativeType\":null,\"relationName\":\"AddressToPeople\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Email\",\"nativeType\":null,\"relationName\":\"EmailToPeople\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhoneNumber\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PhoneNumber\",\"nativeType\":null,\"relationName\":\"PeopleToPhoneNumber\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employee\",\"nativeType\":null,\"relationName\":\"PeopleToemployee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"PeopleTostudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"PhoneNumber\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"People\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"People\",\"nativeType\":null,\"relationName\":\"PeopleToPhoneNumber\",\"relationFromFields\":[\"ssn\"],\"relationToFields\":[\"SSN\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ssn\",\"phoneNumber\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"building\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"floors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rooms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_air_conditioner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sponsor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"construction_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_renovation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_equipment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"building_equipment\",\"nativeType\":null,\"relationName\":\"buildingTobuilding_equipment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"room\",\"nativeType\":null,\"relationName\":\"buildingToroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"building_equipment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"building\",\"nativeType\":null,\"relationName\":\"buildingTobuilding_equipment\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"building_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"large_equipment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"large_equipment\",\"nativeType\":null,\"relationName\":\"building_equipmentTolarge_equipment\",\"relationFromFields\":[\"equipment_id\"],\"relationToFields\":[\"equipment_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"building_id\",\"equipment_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"disciplinaryAction\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"actionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actionType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decisionDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectiveFrom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectiveTo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"severityLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplineStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"disciplineStaff\",\"nativeType\":null,\"relationName\":\"disciplinaryActionTodisciplineStaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentDiscipline\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentDiscipline\",\"nativeType\":null,\"relationName\":\"disciplinaryActionTostudentDiscipline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"disciplineStaff\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"actionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplinaryAction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"disciplinaryAction\",\"nativeType\":null,\"relationName\":\"disciplinaryActionTodisciplineStaff\",\"relationFromFields\":[\"actionId\"],\"relationToFields\":[\"actionId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"manager_employee\",\"nativeType\":null,\"relationName\":\"disciplineStaffTomanager_employee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actionId\",\"essn\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"employee\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"7\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Employee_Card\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Employee_Card\",\"nativeType\":null,\"relationName\":\"Employee_CardToemployee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"People\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"People\",\"nativeType\":null,\"relationName\":\"PeopleToemployee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"SSN\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"manager_employee\",\"nativeType\":null,\"relationName\":\"employeeTomanager_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medical_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"medical_employee\",\"nativeType\":null,\"relationName\":\"employeeTomedical_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_employee\",\"nativeType\":null,\"relationName\":\"employeeToother_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"health_room\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_of_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipment_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"health_room_equipment_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"room\",\"nativeType\":null,\"relationName\":\"health_roomToroom\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medical_employee\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"medical_employee\",\"nativeType\":null,\"relationName\":\"health_roomTomedical_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"building_id\",\"room_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"large_equipment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"equipment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipment_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipment_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"equipment_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"large_equipment_equipment_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchase_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_equipment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"building_equipment\",\"nativeType\":null,\"relationName\":\"building_equipmentTolarge_equipment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"living_room\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_num_of_students\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_num_of_students\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"occupancy_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"living_roomTostudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"building_id\",\"room_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"management_room\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_of_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"room\",\"nativeType\":null,\"relationName\":\"management_roomToroom\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_employee\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"manager_employee\",\"nativeType\":null,\"relationName\":\"management_roomTomanager_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"building_id\",\"room_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"managerDorm\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"user_name\",\"password\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"manager_degree\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"degree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"manager_employee\",\"nativeType\":null,\"relationName\":\"manager_degreeTomanager_employee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"essn\",\"degree\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"manager_employee\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"2\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplineStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"disciplineStaff\",\"nativeType\":null,\"relationName\":\"disciplineStaffTomanager_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_degree\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"manager_degree\",\"nativeType\":null,\"relationName\":\"manager_degreeTomanager_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"management_room\",\"nativeType\":null,\"relationName\":\"management_roomTomanager_employee\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employee\",\"nativeType\":null,\"relationName\":\"employeeTomanager_employee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"medical_degree\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"degree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medical_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"medical_employee\",\"nativeType\":null,\"relationName\":\"medical_degreeTomedical_employee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"essn\",\"degree\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"medical_employee\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"2\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medical_degree\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"medical_degree\",\"nativeType\":null,\"relationName\":\"medical_degreeTomedical_employee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employee\",\"nativeType\":null,\"relationName\":\"employeeTomedical_employee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"health_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"health_room\",\"nativeType\":null,\"relationName\":\"health_roomTomedical_employee\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"other_employee\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeWork\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employee\",\"nativeType\":null,\"relationName\":\"employeeToother_employee\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_room\",\"nativeType\":null,\"relationName\":\"other_employeeToother_room\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_employee_time_work\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_employee_time_work\",\"nativeType\":null,\"relationName\":\"other_employeeToother_employee_time_work\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"other_employee_time_work\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"essn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_work\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_employee_time_work_date_work\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_employee\",\"nativeType\":null,\"relationName\":\"other_employeeToother_employee_time_work\",\"relationFromFields\":[\"essn\"],\"relationToFields\":[\"essn\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"essn\",\"date_work\",\"time_start\",\"time_end\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"other_room\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_of_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_employee\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_employee\",\"nativeType\":null,\"relationName\":\"other_employeeToother_room\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"room\",\"nativeType\":null,\"relationName\":\"other_roomToroom\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"building_id\",\"room_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"relative\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Sssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relationship\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"relativeTostudent\",\"relationFromFields\":[\"Sssn\"],\"relationToFields\":[\"Sssn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"Sssn\",\"fname\",\"lname\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"room\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"room_room_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_area\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"health_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"health_room\",\"nativeType\":null,\"relationName\":\"health_roomToroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"management_room\",\"nativeType\":null,\"relationName\":\"management_roomToroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"other_room\",\"nativeType\":null,\"relationName\":\"other_roomToroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"building\",\"nativeType\":null,\"relationName\":\"buildingToroom\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"building_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"building_id\",\"room_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"student\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Sssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasHealthInsurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studyStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"className\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"5\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dormitory_Card\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dormitory_Card\",\"nativeType\":null,\"relationName\":\"Dormitory_CardTostudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relative\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"relative\",\"nativeType\":null,\"relationName\":\"relativeTostudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"People\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"People\",\"nativeType\":null,\"relationName\":\"PeopleTostudent\",\"relationFromFields\":[\"Sssn\"],\"relationToFields\":[\"SSN\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"living_room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"living_room\",\"nativeType\":null,\"relationName\":\"living_roomTostudent\",\"relationFromFields\":[\"building_id\",\"room_id\"],\"relationToFields\":[\"building_id\",\"room_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentDiscipline\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studentDiscipline\",\"nativeType\":null,\"relationName\":\"studentTostudentDiscipline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"studentDiscipline\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"actionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplinaryAction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"disciplinaryAction\",\"nativeType\":null,\"relationName\":\"disciplinaryActionTostudentDiscipline\",\"relationFromFields\":[\"actionId\"],\"relationToFields\":[\"actionId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"studentTostudentDiscipline\",\"relationFromFields\":[\"Sssn\"],\"relationToFields\":[\"Sssn\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actionId\",\"Sssn\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"other_employee_time_work_date_work\":{\"values\":[{\"name\":\"monday\",\"dbName\":null},{\"name\":\"tuesday\",\"dbName\":null},{\"name\":\"wednesday\",\"dbName\":null},{\"name\":\"thursday\",\"dbName\":null},{\"name\":\"friday\",\"dbName\":null},{\"name\":\"saturday\",\"dbName\":null},{\"name\":\"sunday\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"room_room_status\":{\"values\":[{\"name\":\"Available\",\"dbName\":null},{\"name\":\"Occupied\",\"dbName\":null},{\"name\":\"Under_Maintenance\",\"dbName\":\"Under Maintenance\"}],\"dbName\":null},\"large_equipment_equipment_status\":{\"values\":[{\"name\":\"Working\",\"dbName\":null},{\"name\":\"Damaged\",\"dbName\":null},{\"name\":\"Under_Repair\",\"dbName\":\"Under Repair\"}],\"dbName\":null},\"health_room_equipment_status\":{\"values\":[{\"name\":\"Good\",\"dbName\":null},{\"name\":\"Under_Repair\",\"dbName\":\"Under Repair\"},{\"name\":\"Not_Available\",\"dbName\":\"Not Available\"}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
