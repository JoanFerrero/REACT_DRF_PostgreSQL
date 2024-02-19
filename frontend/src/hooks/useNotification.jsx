import { useState } from "react"
import NotificationService from "../services/NotificationServices"

export const useNotification = () => {
  const [notifications, setNotifications] = useState([])

  const getNotifications = () => {
    if(notifications.length === 0) {
      NotificationService.getNotification()
        .then(({ data, status }) => {
          if (status === 200) {
            setNotifications(data)
          }
      }).catch(e => {
        console.error(e);
      });
    }
  }

  const updateNotification = (id) => {
      NotificationService.updateNotification(id)
        .then(({ data, status }) => {
          if (status === 200) {
            setNotifications(data)
          }
      }).catch(e => {
        console.error(e);
      });
  }
  
  return { notifications, getNotifications }
}