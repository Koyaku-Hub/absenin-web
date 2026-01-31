import React from 'react';

export default function ExportPage() {
  const handleExport = () => {
    // Placeholder: generate CSV using json2csv
    alert('Export functionality will be implemented soon.');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Export Attendance</h1>
      <button
        onClick={handleExport}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Export CSV
      </button>
    </div>
  );
}
