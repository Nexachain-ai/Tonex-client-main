import React, { useEffect, useState } from 'react';
import { getMyRank, getRankProgress, getRankRequirements } from '../../api/rankReward.api';
import { toast } from 'react-toastify';
import './MyRankPage.css';

const MyRankPage = () => {
    const [rankData, setRankData] = useState(null);
    const [progress, setProgress] = useState(null);
    const [requirements, setRequirements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRankData();
    }, []);

    const fetchRankData = async () => {
        try {
            setLoading(true);

            // Fetch all data in parallel
            const [rankRes, progressRes, reqRes] = await Promise.all([
                getMyRank(),
                getRankProgress(),
                getRankRequirements()
            ]);

            if (rankRes?.success) {
                setRankData(rankRes.data);
            }

            if (progressRes?.success) {
                setProgress(progressRes.data);
            }

            if (reqRes?.success) {
                setRequirements(reqRes.data);
            }
        } catch (error) {
            toast.error('Failed to load rank information');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="rank-page-container">
                <div className="loading-spinner">Loading...</div>
            </div>
        );
    }

    const currentRank = rankData?.currentRank || { tier: 'None', level: 0 };
    const topUpWallet = rankData?.topUpWallet || 0;

    return (
        <div className="rank-page-container">
            <div className="rank-header">
                <h1>My Rank & Rewards</h1>
                <p>Track your progress and achievements</p>
            </div>

            {/* Current Rank Card */}
            <div className="current-rank-card">
                <div className="rank-badge">
                    <div className={`rank-icon rank-${currentRank.tier?.toLowerCase()}`}>
                        {currentRank.tier || 'None'}
                    </div>
                    <div className="rank-info">
                        <h2>Current Rank</h2>
                        <p className="rank-tier">{currentRank.tier || 'No Rank Yet'}</p>
                        {currentRank.achievedAt && (
                            <p className="rank-date">
                                Achieved on {new Date(currentRank.achievedAt).toLocaleDateString()}
                            </p>
                        )}
                    </div>
                </div>
                <div className="wallet-info">
                    <h3>Top-Up Wallet</h3>
                    <p className="wallet-amount">${topUpWallet.toLocaleString()}</p>
                    <small>Required for rank qualification</small>
                </div>
            </div>

            {/* Progress to Next Rank */}
            {progress?.nextTier && (
                <div className="progress-card">
                    <h2>Progress to {progress.nextTier.tier}</h2>

                    <div className="progress-section">
                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Main Leg Business</span>
                                <span className="progress-percentage">{progress.progress.mainLeg.percentage}%</span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${progress.progress.mainLeg.percentage}%` }}
                                ></div>
                            </div>
                            <div className="progress-stats">
                                <span>${progress.progress.mainLeg.current.toLocaleString()}</span>
                                <span>/ ${progress.progress.mainLeg.required.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Other Leg Business</span>
                                <span className="progress-percentage">{progress.progress.otherLeg.percentage}%</span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${progress.progress.otherLeg.percentage}%` }}
                                ></div>
                            </div>
                            <div className="progress-stats">
                                <span>${progress.progress.otherLeg.current.toLocaleString()}</span>
                                <span>/ ${progress.progress.otherLeg.required.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Top-Up Wallet Requirement</span>
                                <span className={`status-badge ${progress.progress.topUpWallet.sufficient ? 'sufficient' : 'insufficient'}`}>
                                    {progress.progress.topUpWallet.sufficient ? '✓ Sufficient' : '✗ Insufficient'}
                                </span>
                            </div>
                            <div className="wallet-requirement">
                                <span>${progress.progress.topUpWallet.current.toLocaleString()}</span>
                                <span>/ ${progress.progress.topUpWallet.required.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="next-rank-reward">
                        <h3>Next Rank Reward</h3>
                        <p className="reward-amount">${progress.nextTier.rewardAmount.toLocaleString()}</p>
                    </div>
                </div>
            )}

            {/* Rank Requirements Table */}
            <div className="requirements-card">
                <h2>All Rank Tiers</h2>
                <div className="requirements-table-wrapper">
                    <table className="requirements-table">
                        <thead>
                            <tr>
                                <th>Tier</th>
                                <th>Main Leg</th>
                                <th>Other Leg</th>
                                <th>Reward</th>
                                <th>Top-Up Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requirements.map((tier) => (
                                <tr
                                    key={tier.tier}
                                    className={currentRank.tier === tier.tier ? 'current-tier' : ''}
                                >
                                    <td>
                                        <span className="tier-badge">{tier.tier}</span>
                                    </td>
                                    <td>${tier.mainLegRequirement.toLocaleString()}</td>
                                    <td>${tier.otherLegRequirement.toLocaleString()}</td>
                                    <td className="reward-cell">${tier.rewardAmount.toLocaleString()}</td>
                                    <td>${tier.selfTopUpAmount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Rank History */}
            {rankData?.rankHistory && rankData.rankHistory.length > 0 && (
                <div className="history-card">
                    <h2>Rank Achievement History</h2>
                    <div className="history-list">
                        {rankData.rankHistory.map((history, index) => (
                            <div key={index} className="history-item">
                                <div className="history-badge">{history.tier}</div>
                                <div className="history-details">
                                    <p className="history-date">
                                        {new Date(history.achievedAt).toLocaleDateString()}
                                    </p>
                                    <div className="history-stats">
                                        <span>Main Leg: ${history.mainLegBusiness.toLocaleString()}</span>
                                        <span>Other Leg: ${history.otherLegBusiness.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyRankPage;
