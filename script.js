document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        checkAdBlocker();
    }, 2000);
});

function checkAdBlocker() {
    const adElements = document.querySelectorAll('[id^="ads"]');
    let blockedAds = 0;
    let totalAds = adElements.length;

    adElements.forEach(function(element) {
        if (element.offsetHeight === 0 || element.offsetWidth === 0 || 
            getComputedStyle(element).display === 'none' || 
            getComputedStyle(element).visibility === 'hidden') {
            blockedAds++;
        }
    });

    if (blockedAds > totalAds * 0.5) {
        showAdBlockerWarning();
    }
}

function showAdBlockerWarning() {
    document.body.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
        ">
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px;
                border-radius: 15px;
                text-align: center;
                color: white;
                max-width: 500px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            ">
                <i class="fas fa-shield-alt" style="font-size: 4em; margin-bottom: 20px; color: #ff6b6b;"></i>
                <h2 style="margin: 20px 0; font-size: 2em;">Ad Blocker Tespit Edildi!</h2>
                <p style="margin: 20px 0; font-size: 1.1em; line-height: 1.6;">
                    Selcuk Sports'u desteklemek için lütfen ad blocker'ınızı kapatın. 
                    Reklamlar sayesinde size ücretsiz hizmet sunabiliyoruz.
                </p>
                <div style="margin-top: 30px;">
                    <button onclick="location.reload()" style="
                        background: #ff6b6b;
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        font-size: 1.1em;
                        cursor: pointer;
                        margin-right: 10px;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='#ff5252'" onmouseout="this.style.background='#ff6b6b'">
                        Sayfayı Yenile
                    </button>
                </div>
            </div>
        </div>
    `;
}
