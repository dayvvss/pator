// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  user, // Accept user as a prop
}) {
  return (
    <div>
      <header className="p-4 flex justify-between items-center bg-white shadow">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome, {user?.given_name}</p>
        </div>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}