'use client'
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPost(){
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        await fetch('/api/add-event', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, name, location, time}) })
            
        router.refresh()
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
  };

    return (
        <main className={styles.main}>
            <Link href={'/'}>View Events</Link>
        <h1>Add Event</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
    )
}