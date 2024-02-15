const Incidents = ({incident}) => {
  return (
    <>
      <div className="card border-primary mb-3">
        <div className="card-body text-primary">
          <h5 className="card-title">{incident.title}</h5>
          <p className="card-text">{incident.desc}</p>
        </div>
      </div>
    </>
  )
}

export default Incidents;