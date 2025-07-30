"use client";
import React, { useState } from 'react';
import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or service
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Stay in the loop</h2>
        <p className={styles.subtext}>Subscribe for updates, new features, and more.</p>
        {submitted ? (
          <div className={styles.success}>Thank you for subscribing!</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <button className={styles.button} type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
