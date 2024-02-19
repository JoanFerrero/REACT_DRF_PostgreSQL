import { useState } from "react";

const Notification = ({data}) => {
  const [seen, setSeen] = useState(data.seen);

  const changeSeen = () => {
    setSeen(true)
  }

  return (
    <>
      {seen === true ? (
        <div className="card border mb-3">
          <div className="card-body text-primary">
            <h5 className="card-title">{data.desc}</h5>
          </div>
        </div>
      ): (
        <div className="card border-primary mb-3" onClick={() => changeSeen()}>
          <div className="card-body text-primary">
            <h5 className="card-title">{data.desc}</h5>
          </div>
        </div>
      )}
    </>
  )
}

export default Notification;