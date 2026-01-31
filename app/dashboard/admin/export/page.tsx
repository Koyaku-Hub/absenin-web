import React from 'react';

export default function ExportPage() {
  const handleExport = async () => {
    try {
      // Example dummy data; replace with real attendance data source
      const data = [
        { id: '1', name: 'Alice', timestamp: new Date().toISOString(), status: 'present' },
        { id: '2', name: 'Bob', timestamp: new Date().toISOString(), status: 'absent' },
      ];
      
      // Import the CSV generation utility
      const { generateCSV } = await import('../../../lib/exportUtils');
      const csv = generateCSV(data);
      
      // Create a blob and trigger download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'attendance_export.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Export Attendance</h1>
      <button
        onClick={handleExport}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Export CSV
      </button>
    </div>
  );
}
