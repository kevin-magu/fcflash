"use client";

import React, { useState, useEffect } from "react";
import { Search, CheckCircle, XCircle, Phone, Loader2 } from "lucide-react";
import { getPendingUsers, updateUserStatus } from "@/actions/admin/user-approvals";

export default function UserApprovalsPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<"approve" | "reject" | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Load data from Neon
  const fetchUsers = async (query = "") => {
    setIsSearching(true);
    const data = await getPendingUsers(query);
    setUsers(data);
    setIsSearching(false);
    setLoading(false);
  };

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchUsers(searchTerm);
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const openModal = (action: "approve" | "reject", user: any) => {
    setPendingAction(action);
    setSelectedUser(user);
    setModalOpen(true);
  };

  const confirmAction = async () => {
    if (!selectedUser || !pendingAction) return;
    
    setIsProcessing(true);
    const newStatus = pendingAction === "approve" ? "ACCEPTED" : "REJECTED";
    
    // Server action
    const result = await updateUserStatus(selectedUser.id, newStatus);
    
    if (result.success) {
      // Remove the user from the local state instantly
      setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    } else {
      alert("Something went wrong. Please try again.");
    }
    
    setIsProcessing(false);
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-neutral-800">
            Pending <span className="text-amber-600">Approvals</span>
          </h1>
          <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
            Review and manage registration requests
          </p>
        </div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, email, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl py-3 pl-11 pr-10 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />
          {isSearching && (
            <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-amber-500" size={16} />
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-amber-500" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div key={user.id} className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="flex items-start gap-4 p-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-200 flex-shrink-0">
                    {user.photoUrl ? (
                      <img src={user.photoUrl} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-amber-600 text-[10px] font-bold uppercase tracking-wider">No Img</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-bold text-neutral-800 truncate">{user.name}</h2>
                    <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[9px] uppercase tracking-wider font-bold bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                        {user.role}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-neutral-400">{user.gender}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-3 text-xs text-neutral-500 border-b border-amber-100 flex items-center gap-2 font-medium">
                  <Phone size={12} className="text-amber-500" />
                  <span>{user.phone}</span>
                </div>

                <div className="flex divide-x divide-amber-100">
                  <button
                    onClick={() => openModal("approve", user)}
                    className="cursor-pointer flex-1 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-neutral-600 hover:text-green-600 hover:bg-white/40 transition-all"
                  >
                    <CheckCircle size={14} /> Approve
                  </button>
                  <button
                    onClick={() => openModal("reject", user)}
                    className="cursor-pointer flex-1 py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-neutral-600 hover:text-red-500 hover:bg-white/40 transition-all"
                  >
                    <XCircle size={14} /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {users.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-4">
              <CheckCircle className="text-amber-300" size={32} />
            </div>
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">All caught up!</p>
            <p className="text-neutral-400 text-xs mt-1">No pending approvals at the moment.</p>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {modalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-amber-100">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                pendingAction === "approve" ? "bg-green-50" : "bg-red-50"
              }`}>
                {pendingAction === "approve" ? (
                  <CheckCircle size={28} className="text-green-500" />
                ) : (
                  <XCircle size={28} className="text-red-500" />
                )}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-neutral-800 mb-2">
                {pendingAction === "approve" ? "Approve User" : "Reject User"}
              </h3>
              <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                Are you sure you want to {pendingAction} <span className="font-bold text-neutral-800">{selectedUser.name}</span>?
                {pendingAction === "reject" && " This action cannot be undone."}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  disabled={isProcessing}
                  className="cursor-pointer flex-1 py-3 rounded-xl border-2 border-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-wider hover:bg-neutral-50 transition-all disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmAction}
                  disabled={isProcessing}
                  className={`cursor-pointer flex-1 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pendingAction === "approve"
                      ? "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/20"
                      : "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20"
                  } disabled:opacity-50`}
                >
                  {isProcessing ? <Loader2 size={14} className="animate-spin" /> : "Confirm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}