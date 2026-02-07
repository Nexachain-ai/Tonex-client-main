import { Axios } from "../constants/mainContent";

const rankRewardApi = "/api/v1";

// ==================== USER APIs ====================

/**
 * Get current user's rank information
 */
export const getMyRank = async () => {
    try {
        const response = await Axios.get(`${rankRewardApi}/user/my-rank`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Get all rank requirements (tier list)
 */
export const getRankRequirements = async () => {
    try {
        const response = await Axios.get(`${rankRewardApi}/user/rank-requirements`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Get user's rank history
 */
export const getRankHistory = async () => {
    try {
        const response = await Axios.get(`${rankRewardApi}/user/rank-history`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Get user's progress toward next rank
 */
export const getRankProgress = async () => {
    try {
        const response = await Axios.get(`${rankRewardApi}/user/rank-progress`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Get top-up wallet balance
 */
export const getTopUpWallet = async () => {
    try {
        const response = await Axios.get(`${rankRewardApi}/user/topup-wallet`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Add funds to top-up wallet
 */
export const addToTopUpWallet = async (amount) => {
    try {
        const response = await Axios.post(`${rankRewardApi}/user/topup-wallet/add`, { amount });
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

// ==================== ADMIN APIs ====================

/**
 * Create a new reward tier
 */
export const createRewardTier = async (payload) => {
    try {
        const response = await Axios.post(`${rankRewardApi}/admin/rank-tiers`, payload);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Update an existing reward tier
 */
export const updateRewardTier = async (id, payload) => {
    try {
        const response = await Axios.put(`${rankRewardApi}/admin/rank-tiers/${id}`, payload);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Delete a reward tier
 */
export const deleteRewardTier = async (id) => {
    try {
        const response = await Axios.delete(`${rankRewardApi}/admin/rank-tiers/${id}`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Toggle reward tier status
 */
export const toggleRewardTierStatus = async (id) => {
    try {
        const response = await Axios.patch(`${rankRewardApi}/admin/rank-tiers/${id}/toggle`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Get all reward tiers (admin view)
 */
export const getAllRewardTiers = async () => {
    try {
        const response = await Axios.get(`${rankRewardApi}/admin/rank-tiers`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Manually trigger rank check for a user
 */
export const manualRankCheck = async (userId) => {
    try {
        const response = await Axios.post(`${rankRewardApi}/admin/rank-check/${userId}`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};

/**
 * Get users who achieved a specific rank
 */
export const getRankAchievers = async (tier) => {
    try {
        const response = await Axios.get(`${rankRewardApi}/admin/rank-achievers/${tier}`);
        return response?.data;
    } catch (error) {
        return { success: false, message: error.message || "API error" };
    }
};
