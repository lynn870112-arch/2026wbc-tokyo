const tripData = {
    "trip_name": "2026 日本 WBC 應援之旅",
    "itinerary": [
        {
            "date": "3/4 (三)",
            "hotel": "🏠 APA Hotel 新御徒町",
            "activities": [
                {"time": "07:35-11:05", "event": "CI154 飛抵名古屋中部機場 (NGO)"},
                {"time": "11:45-12:30", "event": "搭乘 μ-sky 前往名古屋站"},
                {"time": "15:00-16:40", "event": "搭乘新幹線前往東京站 (預約特大行李位)"},
                {"time": "17:00", "event": "飯店 Check-in 並放行李"},
                {"time": "17:30-21:00", "event": "阿美橫町逛街 & 秋葉原巡禮"}
            ]
        },
        {
            "date": "3/5 (四)",
            "hotel": "🏠 APA Hotel 新御徒町",
            "activities": [
                {"time": "08:00-10:30", "event": "淺草寺參拜"},
                {"time": "12:00-15:30", "event": "⚾ WBC 觀賽：台灣 vs 澳洲", "isWBC": true},
                {"time": "16:00-17:00", "event": "神保町 Mizuno 旗艦店"},
                {"time": "17:30-21:00", "event": "新宿逛街、晚餐"}
            ]
        },
        {
            "date": "3/6 (五)",
            "hotel": "🏠 APA Hotel 新御徒町",
            "activities": [
                {"time": "08:00-17:00", "event": "鎌倉、江之島一日遊 (大佛、江之電、平交道)"},
                {"time": "19:00-22:00", "event": "📺 WBC 轉播：台灣 vs 日本 (地點待定)", "isWBC": true}
            ]
        },
        {
            "date": "3/7 (六)",
            "hotel": "🏠 APA Hotel 新御徒町",
            "activities": [
                {"time": "08:30-10:30", "event": "日枝神社參拜 (山王鳥居)"},
                {"time": "12:00-15:30", "event": "⚾ WBC 觀賽：台灣 vs 捷克", "isWBC": true},
                {"time": "16:00-21:00", "event": "原宿、澀谷逛街"}
            ]
        },
        {
            "date": "3/8 (日)",
            "hotel": "🏠 APA 名古屋站前北",
            "activities": [
                {"time": "09:00-11:00", "event": "飯店周邊早餐 & 寄放行李"},
                {"time": "12:00-15:30", "event": "⚾ WBC 觀賽：台灣 vs 韓國", "isWBC": true},
                {"time": "18:30-20:10", "event": "搭乘新幹線回名古屋"},
                {"time": "20:30", "event": "APA 名古屋站前北 Check-in"}
            ]
        },
        {
            "date": "3/9 (一)",
            "hotel": "🏠 APA 名古屋站前北",
            "activities": [
                {"time": "09:00-11:30", "event": "名古屋城巡禮"},
                {"time": "12:00-15:00", "event": "大須觀音與商店街"},
                {"time": "16:00-18:00", "event": "榮商圈、綠洲 21、電視塔"},
                {"time": "18:30-20:30", "event": "名古屋特色晚餐 (味噌豬排/手羽先)"}
            ]
        },
        {
            "date": "3/10 (二)",
            "hotel": "🏠 回家路途",
            "activities": [
                {"time": "07:30-08:30", "event": "搭乘 μ-sky 前往中部機場"},
                {"time": "09:50-12:15", "event": "CI151 飛往桃園機場"}
            ]
        }
    ]
};

function renderItinerary() {
    const container = document.getElementById('itinerary-container');
    let html = '';

    tripData.itinerary.forEach(day => {
        html += `
            <div class="day-card">
                <div class="day-header">
                    <span>${day.date}</span>
                </div>
                <div class="day-content">
                    <div style="padding: 0 15px;"><span class="hotel-tag">${day.hotel}</span></div>
                    ${day.activities.map(act => `
                        <div class="activity-item">
                            <div class="time">${act.time}</div>
                            <div class="event ${act.isWBC ? 'wbc-event' : ''}">${act.event}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

window.onload = renderItinerary;
