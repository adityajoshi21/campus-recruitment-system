import React from 'react'

export const RecentActivity = (props) => {
    return (
        <div>
             <div class="activity-list">
                    <i class="fas fa-bolt"></i>
                    <div class="content">
                      <h5>{props.title}</h5>
                      <span class="time">{props.activitytime}</span>
                    </div>
                    <div class="close-activity">
                      <i class="fas fa-times"></i>
                    </div>
                  </div>
        </div>
    )
}
