import { BackNav } from '@/components/BackNav';

export default function ArjitaSevasPage() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <BackNav />
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Arjita Sevas</h1>
            <p className="text-lg text-gray-600">
              This is a placeholder page for Arjita Sevas. Content will be added soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}