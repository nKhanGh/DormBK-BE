export interface Student {
  new_ssn: string;
  ssn: string;
  first_name: string;
  last_name: string;
  birthday: string;
  sex: string;
  health_state: string | null;
  ethnic_group: string | null;
  student_id: string;
  has_health_insurance: boolean;
  study_status: string | null;
  class_name: string | null;
  faculty: string | null;
  building_id: string;
  room_id: string;
  phone_numbers: string;
  emails: string;
  addresses: string;
}
