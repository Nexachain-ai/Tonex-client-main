import React, { useEffect, useState } from "react";
import {
  getAllRewardTiers,
  createRewardTier,
  updateRewardTier,
  toggleRewardTierStatus,
  getRankAchievers,
} from "../../api/rankReward.api";
import { setLoading } from "../../redux/slices/loadingSlice";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  TrendingUp,
  DollarSign,
  Edit3,
  ToggleLeft,
  ToggleRight,
  Award,
  Users,
} from "lucide-react";

const ManageRankAndReward = () => {
  const [rankTiers, setRankTiers] = useState([]);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [editFormData, setEditFormData] = useState({
    mainLegRequirement: "",
    otherLegRequirement: "",
    rewardAmount: "",
    selfTopUpAmount: "",
  });
  const [payload, setPayload] = useState({
    tier: "",
    level: "",
    mainLegRequirement: "",
    otherLegRequirement: "",
    rewardAmount: "",
    selfTopUpAmount: "",
  });

  const fetchRankTiers = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getAllRewardTiers();
      if (response?.success) {
        setRankTiers(response?.data);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch rank tiers");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchRankTiers();
  }, []);

  const handleOpenEditModal = (tier) => {
    setSelectedTier(tier);
    setEditFormData({
      mainLegRequirement: tier.mainLegRequirement || "",
      otherLegRequirement: tier.otherLegRequirement || "",
      rewardAmount: tier.rewardAmount || "",
      selfTopUpAmount: tier.selfTopUpAmount || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTier) return;

    try {
      dispatch(setLoading(true));
      const response = await updateRewardTier(selectedTier._id, editFormData);

      if (response?.success) {
        Swal.fire({
          icon: "success",
          text: response?.message || "Rank tier updated successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        setIsEditModalOpen(false);
        setSelectedTier(null);
        fetchRankTiers();
      } else {
        Swal.fire({
          icon: "error",
          text: response?.message || "Failed to update rank tier",
        });
      }
    } catch (err) {
      console.error("Failed to update rank tier:", err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleStatusActiveInactive = async (id) => {
    try {
      dispatch(setLoading(true));
      const response = await toggleRewardTierStatus(id);
      if (response?.success) {
        Swal.fire({
          icon: "success",
          text: response?.message || "Rank tier status changed successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        setRankTiers((prevTiers) =>
          prevTiers.map((tier) =>
            tier._id === id ? { ...tier, status: !tier.status } : tier
          )
        );
      }
    } catch (error) {
      console.error("Error changing status:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !payload.tier ||
      !payload.level ||
      !payload.mainLegRequirement ||
      !payload.otherLegRequirement ||
      !payload.rewardAmount ||
      !payload.selfTopUpAmount
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      dispatch(setLoading(true));
      const response = await createRewardTier(payload);

      if (response?.success) {
        Swal.fire({
          icon: "success",
          text: response?.message || "Rank tier created successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        setPayload({
          tier: "",
          level: "",
          mainLegRequirement: "",
          otherLegRequirement: "",
          rewardAmount: "",
          selfTopUpAmount: "",
        });
        fetchRankTiers();
      } else {
        Swal.fire({
          icon: "error",
          text: response?.message || "Failed to create rank tier",
        });
      }
    } catch (err) {
      console.error("Failed to create rank tier:", err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="space-y-5 mt-5">
      {/* Create Form */}
      <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-lg w-full">
        <h2 className="text-xl font-bold text-white mb-4">
          Create New Rank Tier
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-slate-400 text-sm">Tier (e.g., T1, T2)</span>
              <input
                type="text"
                name="tier"
                value={payload.tier}
                onChange={handleInputChange}
                placeholder="T1"
                className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
              />
            </div>
            <div className="space-y-2">
              <span className="text-slate-400 text-sm">Level (1-10)</span>
              <input
                type="number"
                name="level"
                value={payload.level}
                onChange={handleInputChange}
                placeholder="1"
                min="1"
                max="10"
                className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-slate-400 text-sm">Main Leg Requirement ($)</span>
              <input
                type="number"
                name="mainLegRequirement"
                value={payload.mainLegRequirement}
                onChange={handleInputChange}
                placeholder="5000"
                className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
              />
            </div>
            <div className="space-y-2">
              <span className="text-slate-400 text-sm">Other Leg Requirement ($)</span>
              <input
                type="number"
                name="otherLegRequirement"
                value={payload.otherLegRequirement}
                onChange={handleInputChange}
                placeholder="5000"
                className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-slate-400 text-sm">Reward Amount ($)</span>
              <input
                type="number"
                name="rewardAmount"
                value={payload.rewardAmount}
                onChange={handleInputChange}
                placeholder="250"
                className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
              />
            </div>
            <div className="space-y-2">
              <span className="text-slate-400 text-sm">Self Top-Up Required ($)</span>
              <input
                type="number"
                name="selfTopUpAmount"
                value={payload.selfTopUpAmount}
                onChange={handleInputChange}
                placeholder="100"
                className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-500 cursor-pointer"
            >
              Create Tier
            </button>
          </div>
        </form>
      </div>

      {/* Tiers List */}
      <h2 className="text-xl font-bold text-white mt-6">Rank Tier List</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rankTiers?.map((tier) => (
          <div
            key={tier._id}
            className="group relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 border border-purple-800/30 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>

            {/* Header Section */}
            <div className="relative flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {tier.tier}
                  </h3>
                  <p className="text-xs text-slate-400">Level {tier.level}</p>
                </div>
              </div>

              {/* Enhanced Status Badge */}
              <div
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${tier.status
                    ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-300 shadow-lg shadow-emerald-500/10"
                    : "bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30 text-red-300 shadow-lg shadow-red-500/10"
                  }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${tier.status ? "bg-emerald-400 animate-pulse" : "bg-red-400"
                    }`}
                ></div>
                {tier.status ? "Active" : "Inactive"}
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-purple-700/30 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-sm">Main Leg</span>
                </div>
                <span className="font-bold text-white text-lg">
                  ${tier.mainLegRequirement.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-purple-700/30 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-pink-400" />
                  <span className="text-slate-300 text-sm">Other Leg</span>
                </div>
                <span className="font-bold text-white text-lg">
                  ${tier.otherLegRequirement.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300 text-sm">Reward</span>
                </div>
                <span className="font-bold text-green-300 text-lg">
                  ${tier.rewardAmount.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-sm">Top-Up Required</span>
                </div>
                <span className="font-bold text-blue-300 text-lg">
                  ${tier.selfTopUpAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handleOpenEditModal(tier)}
                style={{
                  position: "relative",
                  zIndex: 40,
                  pointerEvents: "auto",
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group/btn"
              >
                <Edit3 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                Edit
              </button>

              <button
                onClick={() => handleStatusActiveInactive(tier._id)}
                style={{
                  position: "relative",
                  zIndex: 40,
                  pointerEvents: "auto",
                }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg group/btn ${tier.status
                    ? "bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white hover:shadow-orange-500/25"
                    : "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white hover:shadow-emerald-500/25"
                  }`}
              >
                {tier.status ? (
                  <>
                    <ToggleRight className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Deactivate
                  </>
                ) : (
                  <>
                    <ToggleLeft className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Activate
                  </>
                )}
              </button>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-slate-900 p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4">
              Edit Rank Tier - {selectedTier?.tier}
            </h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Main Leg Requirement ($)</span>
                <input
                  type="number"
                  name="mainLegRequirement"
                  value={editFormData.mainLegRequirement}
                  onChange={handleEditInputChange}
                  placeholder="Main Leg Requirement"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Other Leg Requirement ($)</span>
                <input
                  type="number"
                  name="otherLegRequirement"
                  value={editFormData.otherLegRequirement}
                  onChange={handleEditInputChange}
                  placeholder="Other Leg Requirement"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Reward Amount ($)</span>
                <input
                  type="number"
                  name="rewardAmount"
                  value={editFormData.rewardAmount}
                  onChange={handleEditInputChange}
                  placeholder="Reward Amount"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>
              <div className="space-y-2">
                <span className="text-slate-400 text-sm">Self Top-Up Required ($)</span>
                <input
                  type="number"
                  name="selfTopUpAmount"
                  value={editFormData.selfTopUpAmount}
                  onChange={handleEditInputChange}
                  placeholder="Self Top-Up Amount"
                  className="w-full p-2 rounded border bg-slate-800 text-white text-sm"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setSelectedTier(null);
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRankAndReward;
