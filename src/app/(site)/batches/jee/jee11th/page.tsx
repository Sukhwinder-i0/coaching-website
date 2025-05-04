import BatchDetails from '@/components/Batch';

export default function JEEBatchPage() {
  return (
    <div className="min-h-screen min-w-screen py-20 px-6">
      <BatchDetails
        title="JEE 11th Batch"
        faculties={['Dr. Kumar', 'Ms. Anjali', 'Mr. Raghav']}
        startDate="2025-06-10"
        endDate="2026-03-30"
        duration="10 Months"
        price={25000}
        originalPrice={40000}
        location="Delhi Campus"
        category="JEE"
        level="11"
        mode="Offline"
      />
    </div>
  );
}
