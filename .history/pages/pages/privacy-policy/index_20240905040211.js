import React from 'react';
import Head from 'next/head';

// import styles from '../styles/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <>
      
      <div 
      
    //   className={styles.container}
      >
        <h1>Privacy Policy</h1>
        <p>
          Welcome to PATER! This Privacy Policy explains how we collect, use, and protect your personal information when
          you use our Social Media Post Automator platform.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect the following types of information:
        </p>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you sign up for an account, we collect your name, email address, and other
            contact details.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about your activity on our platform, such as the content you
            create, schedule, and post.
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> We use cookies to track your usage and preferences on our platform.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          The information we collect is used to:
        </p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Personalize your experience on the platform.</li>
          <li>Communicate with you about updates, promotions, and other relevant information.</li>
          <li>Analyze platform usage and improve functionality.</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties except:
        </p>
        <ul>
          <li>When required by law.</li>
          <li>With service providers who assist us in operating our platform.</li>
          <li>To protect the rights and safety of our users and our platform.</li>
        </ul>

        <h2>Security</h2>
        <p>
          We implement industry-standard security measures to protect your data. However, no method of transmission over
          the internet is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. If you wish to exercise these rights,
          please contact us at [Your Contact Information].
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated
          policy will take effect immediately upon posting.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at support@pator.net.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
