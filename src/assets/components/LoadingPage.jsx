import React from 'react'
import '../../App.css'
export default function LoadingPage() {
    return (
        <div className="country-card-skeleton">
            <div className="skeleton skeleton-flag"></div>

            <div className="skeleton-content">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
            </div>
        </div>
    );
}
