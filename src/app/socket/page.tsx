'use client';

import { useEffect, useRef, useState } from 'react';
// import io, { Socket } from 'socket.io-client';

const SocketPage = () => {
  const [notifications, setNotifications] = useState<unknown[]>([]);
  // const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // if (!socketRef.current) {
    //   socketRef.current = io('http://localhost:8000/notification');
    //   (window as unknown as { socket: Socket }).socket = socketRef.current;

    //   socketRef.current?.on('connect', () => {
    //     socketRef.current?.emit('join', { id: 3 });
    //     console.log('connected');
    //   });
    // }

    return () => {
      // socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    // socketRef.current?.on('notification', (data) => {
    //   console.log('notification', data);
    //   setNotifications((prev) => [...prev, data]);
    // });
  }, []);

  const handleNotificationAction = () => {
    // socketRef.current?.emit('notificationAction', { id: '1' });
    console.log('handleNotificationAction');
  };

  return (
    <div>
      <h1>socketPage</h1>
      <button onClick={handleNotificationAction}>수락 또는 거절 버튼</button>
      <div>
        <h2>notification</h2>
        {notifications.map((noti, idx) => (
          <div key={idx}>{JSON.stringify(noti)}</div>
        ))}
      </div>
    </div>
  );
};

export default SocketPage;
