import React from 'react';
import footerData from './footerData.json'; // Import the JSON file

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className={footerData.footer.backgroundClass + " " + footerData.footer.paddingClass}>
                <div className={footerData.footer.containerClass}>
                    <div className={footerData.footer.textClass}>
                        {footerData.footer.text}
                    </div>
                </div>
            </footer>
        </div>
    );
}
