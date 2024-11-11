// src/components/AdminDashboard.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchAppointments, updateAppointmentStatus } from "../services/api";

interface Appointment {
  _id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  comments: string;
  status: "pending" | "confirmed" | "cancelled";
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setIsLoading(true);
      const data = await fetchAppointments();
      setAppointments(data);
      setError(null);
    } catch (err) {
      setError("Failed to load appointments. Please try again.");
      console.error("Error fetching appointments:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (
    id: string,
    status: "pending" | "confirmed" | "cancelled"
  ) => {
    try {
      await updateAppointmentStatus(id, status);
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === id ? { ...appointment, status } : appointment
        )
      );
    } catch (err) {
      console.error("Error updating appointment status:", err);
      alert("Failed to update appointment status. Please try again.");
    }
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading appointments...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      {appointments.length === 0 ? (
        <p className="text-center text-gray-600">
          No appointments scheduled yet.
        </p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <motion.tr
                  key={appointment._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(appointment.date).toLocaleDateString()}{" "}
                    {appointment.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : appointment.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() =>
                        handleStatusUpdate(appointment._id, "confirmed")
                      }
                      className="text-green-600 hover:text-green-900 mr-2"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() =>
                        handleStatusUpdate(appointment._id, "cancelled")
                      }
                      className="text-red-600 hover:text-red-900"
                    >
                      Cancel
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
