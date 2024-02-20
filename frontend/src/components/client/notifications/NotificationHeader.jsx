import { useNotification } from "../../../hooks/useNotification";

const NotificationHeader = ({data}) => {
  const { updateNotification } = useNotification()

  const changeSeen = (id) => {
    updateNotification(id)
  }
  return (
    <li className="list-group-item" key={data.id} onClick={()=> changeSeen(data.id)}>{data.desc}</li>
  )
}

export default NotificationHeader;