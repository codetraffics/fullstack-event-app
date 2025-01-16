import Link from "next/link";
import Event from "./components/Event";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";

async function getEvents(){
  const events = await prisma.event.findMany({
    where: {
      published : true
    },
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return events;
}

export default async function Home() {
  const events = await getEvents();
  console.log({events})
  return (
    <main className={styles.main}>
      <Link href={'/add-event'}>Add Event</Link>
      <h1>Welcome to Events Corner</h1>
      {
        events.map((event) => {
          return (
            <Event 
              key = {event.id}
              id={event.id}
              name={event.name}
              date={JSON.stringify(event.date)}
              time={event.time}
              location={event.location}
            />
          )
        })
      }
    </main>
  );
}
