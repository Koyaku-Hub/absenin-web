import { Parser } from 'json2csv';

type AttendanceRecord = {
  id: string;
  name: string;
  timestamp: string;
  status: 'present' | 'absent';
};

export function generateCSV(data: AttendanceRecord[]): string {
  const fields = ['id', 'name', 'timestamp', 'status'];
  const parser = new Parser({ fields });
  return parser.parse(data);
}
